import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
};

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!subject || !week_day || !time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classses')
          .whereExists(function() {
            this.select('class_schedule.*')
              .from('class_schedule')
              .whereRaw('`class_schedule`, `class_id` = `classses`.`id`')
              .whereRaw('`class_schedule`, `week_day` = ??', [Number(week_day)])
              .whereRaw('`class_schedule`, `from` <= ??', [timeInMinutes])
              .whereRaw('`class_schedule`, `to` > ??', [timeInMinutes])
          })
          .where('classes.subject', '=', subject)
          .join('users', 'classes.user_id', '=', 'users.id')
          .select(['classes.*', 'users.*']);

        return response.status(200).json(classes);
    }

    async create(request: Request, response: Response) {
        const { 
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            /* Inserindo um usuário - INI */
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
    
            const user_id = insertedUsersIds[0];
            /* Inserindo um usuário - FIM */
    
            /* Inserindo uma aula - INI */
            const insertedClassesIds = await trx('classes').insert({
                user_id,
                subject,
                cost
            });
    
            const class_id = insertedClassesIds[0];
            /* Inserindo uma aula - FIM */
    
            /* Inserindo uma agenda - INI */
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to:  convertHourToMinutes(scheduleItem.to)
                };
            });
    
            await trx('class_schedule').insert(classSchedule);
            /* Inserindo uma agenda - FIM */
    
            await trx.commit();
    
            return response.status(201).json({ message: 'Inserted user', user_id: user_id});
        } catch (err) {
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}