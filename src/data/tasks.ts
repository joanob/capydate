import { dbConn } from "../services/db";
import { tasksService } from "../services/db/tasks";
import { ImmerStateCreator } from "./types";

export interface TaskSlice {
  tasks: Task[];
  getTasks: () => void;
  addTask: (task: Task) => void;
}

export const taskSlice: ImmerStateCreator<TaskSlice> = (set) => ({
  tasks: [],
  getTasks: () => {
    dbConn().then((conn) => {
      tasksService.getAllTasks(conn).then((tasks) => {
        set((state) => {
          state.tasks = tasks;
        });
      });
    });
  },
  addTask: (task) => {
    dbConn().then((conn) => {
      tasksService.addTask(conn, task).then((task) => {
        set((state) => {
          state.tasks.push(task);
        });
      });
    });
  },
});
