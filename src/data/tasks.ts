import { ImmerStateCreator } from "./types";

export interface TaskSlice {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const taskSlice: ImmerStateCreator<TaskSlice> = (set) => ({
  tasks: [],
  addTask: (task) => {
    set((state) => {
      state.tasks.push(task);
    });
  },
});
