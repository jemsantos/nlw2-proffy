import React from 'react';
import { View, Image } from 'react-native';

//import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars2.githubusercontent.com/u/46090502?s=460&u=666e698ac4e1ae47b95f9acc5eefec950dedba20&v=4'
          }}
        />
      </View>
    </View>
  );
}

export default TeacherItem;