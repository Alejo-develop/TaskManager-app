export const HabitTable = `
  CREATE TABLE IF NOT EXISTS habits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    frequency TEXT,
    startDate: DATE NOT NULL,
    endDate: DATE NOT NULL,
    streak INTEGER DEFAULT 0,
    createdAt TEXT
  );
`;
