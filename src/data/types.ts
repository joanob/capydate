import { StateCreator } from "zustand";
import { AppStateSlice } from "./appState";

export type Store = AppStateSlice;

export type ImmerStateCreator<T> = StateCreator<
  Store,
  [["zustand/immer", never], never],
  [],
  T
>;
