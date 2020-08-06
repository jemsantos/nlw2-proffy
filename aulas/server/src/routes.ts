import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();


/* routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World!'});
}); */
routes.get('/classes', classesControllers.index);

/**
  {
    "name": "",
    "avatar": "",
    "whatsapp": "",
    "bio": "",
    "subject": "",
    "cost": 0,
    "schedule": [
      { "week_day": 0, "from": "00:00", "to": "00:00" },
      { "week_day": 0, "from": "00:00", "to": "00:00" }
    ]
  } 
*/
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);

/**
  {
    "user_id": 1
  }
 */
routes.post('/connections', connectionsController.create);

export default routes;