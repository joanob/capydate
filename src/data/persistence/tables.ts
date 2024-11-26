import { SQLiteDatabase } from "expo-sqlite";
import { createTasksTableQuery } from "./tasks";

export const createTables = async (db: SQLiteDatabase) => {
  await db.execAsync(createTasksTableQuery).catch((err) => {
    console.error(err);
  });
};
