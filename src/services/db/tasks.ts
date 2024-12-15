import { SQLiteDatabase } from "expo-sqlite";

export const createTasksTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        date INTEGER,
        isComplete BOOLEAN
    )
`;

interface TaskDTO {
  id: number;
  text: string;
  date: number; // Miliseconds
  isComplete: number; // 1 or 0
}

const taskToDto = (task: Task): TaskDTO => ({
  id: task.id,
  text: task.text,
  date: task.date.getTime(),
  isComplete: task.isComplete ? 1 : 0,
});

const dtoToTask = (dto: TaskDTO): Task => ({
  id: dto.id,
  text: dto.text,
  date: new Date(dto.date),
  isComplete: dto.isComplete === 1,
});

interface TasksService {
  getAllTasks: (db: SQLiteDatabase) => Promise<Task[]>;
  addTask: (db: SQLiteDatabase, task: Task) => Promise<Task>;
}

const getAllTasks = async (db: SQLiteDatabase): Promise<Task[]> => {
  const res = await db.getAllAsync<TaskDTO>(
    "SELECT id, text, date, isComplete FROM tasks"
  );
  return res.map((task: TaskDTO) => {
    return dtoToTask(task);
  });
};

const addTask = async (db: SQLiteDatabase, task: Task): Promise<Task> => {
  const stmt = await db.prepareAsync(
    "INSERT INTO tasks(text, date, isComplete) VALUES ($text, $date, $isComplete)"
  );
  const dto = taskToDto(task);
  try {
    const res = await stmt.executeAsync({
      $text: dto.text,
      $date: dto.date,
      $isComplete: dto.isComplete,
    });
    task.id = res.lastInsertRowId;
    return task;
  } finally {
    await stmt.finalizeAsync();
  }
};

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

export const tasksService: TasksService = {
  getAllTasks,
  addTask,
};
