import {
  SQLiteDatabase,
  deleteDatabaseAsync,
  openDatabaseAsync,
} from "expo-sqlite";
import { createTables } from "./tables";

let conn: SQLiteDatabase;

export const dbConn = async (): Promise<SQLiteDatabase> => {
  // await deleteDB();

  if (conn) {
    return conn;
  } else {
    conn = await openDatabaseAsync("capytest.db");
    await createTables(conn);
    return conn;
  }
};

const deleteDB = async () => {
  try {
    await deleteDatabaseAsync("capytest.db");
    console.log("DB deleted");
  } catch (error) {
    console.log(error);
  }
};
