import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { taskSlice, TaskSlice } from "./tasks";

type Store = TaskSlice;

export const useAppStore = create(
  immer<Store>((...a) => ({
    ...taskSlice(...a),
  }))
);
