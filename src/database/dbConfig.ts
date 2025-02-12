import SQLite from 'react-native-sqlite-storage';
import {HabitTable} from './models/habit.model';
import {ChallengeTable} from './models/challenge.model';
import {PurposeTable} from './models/purpose.model';

const database = SQLite.openDatabase(
  {
    name: 'TaskManager',
    location: 'default',
  },
  () => {
    database.transaction(tx => {
      tx.executeSql(
        HabitTable,
        [],
        () => {},
        error => {
          console.error('Error creating table "habits":', error);
        },
      );

      tx.executeSql(
        ChallengeTable,
        [],
        () => {
          console.log('Table "challenges" created successfully');
        },
        error => {
          console.error('Error creating table "challenges":', error);
        },
      );

      tx.executeSql(
        PurposeTable,
        [],
        () => {
          console.log('Table "purposes" created successfully');
        },
        error => {
          console.error('Error creating table "purposes":', error);
        },
      );
    });
  },
  error => console.error('Error opening database:', error),
);

export default database;
