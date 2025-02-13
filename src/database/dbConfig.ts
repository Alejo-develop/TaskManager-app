import SQLite from 'react-native-sqlite-storage';
import {HabitTable} from './models/habit.model';
import {ChallengeTable} from './models/challenge.model';
import {PurposeTable} from './models/purpose.model';

const initializeDatabase = () => {
  database.transaction(tx => {
    tx.executeSql(
      HabitTable,
      [],
      () => {
        console.log('Table "habits" created successfully');
      },
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
};

const database = SQLite.openDatabase(
  {
    name: 'TaskManager',
    location: 'default',
  },
  () => {
    console.log('Database opened successfully');
    initializeDatabase();
  },
  error => console.error('Error opening database:', error),
);

export default database;
