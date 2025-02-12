export const ChallengeTable = `
  CREATE TABLE IF NOT EXISTS challenge (
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
