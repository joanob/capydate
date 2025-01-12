import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { appStateSlice } from "./appState";
import { Store } from "./types";

export const useAppStore = create(
  immer<Store>((...a) => ({
    ...appStateSlice(...a),
  }))
);
