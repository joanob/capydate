import { StateCreator } from "zustand";
import { TaskSlice } from "./tasks";
import { AppStateSlice } from "./appState";

export type Store = TaskSlice & AppStateSlice;

export type ImmerStateCreator<T> = StateCreator<
  Store,
  [["zustand/immer", never], never],
  [],
  T
>;
