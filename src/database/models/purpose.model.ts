export const PurposeTable = `
  CREATE TABLE IF NOT EXISTS purpose(
    id INTEGRER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    );
`;
