export const PurposeTable = `
  CREATE TABLE IF NOT EXISTS purpose (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT
  );
`;
