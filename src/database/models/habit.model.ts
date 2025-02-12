export const HabitTable = `
  CREATE TABLE IF NOT EXISTS habits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    img TEXT,
    description TEXT,
    frequency TEXT,
    streak INTEGER DEFAULT 0,
    createdAt TEXT
  );
`;