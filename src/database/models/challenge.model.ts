export const ChallengeTable = `
  CREATE TABLE IF NOT EXISTS challenge (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    frequency TEXT,
    startDate DATE NO NULL,
    endDate DATE NOT NULL,
    streak INTEGER DEFAULT 0,
    createdAt TEXT
  );
`;
