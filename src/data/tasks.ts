import { ImmerStateCreator } from "./types";

export interface TaskSlice {
  tasks: Task[];
}

export const taskSlice: ImmerStateCreator<TaskSlice> = (set) => ({
  tasks: [],
});
