export const createTasksTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        done BOOLEAN
    )
`;

/* export const getStoredTodos = async (db: SQLiteDatabase): Promise<Todo[]> => {
    const res = await db.getAllAsync<Todo>("SELECT id, text, done FROM todos");
    return res.map((todo: Todo) => ({
      id: todo.id,
      text: todo.text,
      done: todo.done,
    }));
  };
  
  export const saveTodo = async (
    db: SQLiteDatabase,
    todo: Todo
  ): Promise<Todo> => {
    const stmt = await db.prepareAsync(
      "INSERT INTO todos(text, done) VALUES ($text, $done)"
    );
    try {
      const res = await stmt.executeAsync({
        $text: todo.text,
        $done: todo.done,
      });
      todo.id = res.lastInsertRowId;
      return todo;
    } finally {
      await stmt.finalizeAsync();
    }
  };
  
  export const setTodoDone = async (
    db: SQLiteDatabase,
    id: Todo["id"],
    done: Todo["done"]
  ) => {
    const stmt = await db.prepareAsync(
      "UPDATE todos SET done = $done WHERE id = $id"
    );
    try {
      const res = await stmt.executeAsync({
        $id: id,
        $done: done,
      });
    } finally {
      await stmt.finalizeAsync();
    }
  }; */
