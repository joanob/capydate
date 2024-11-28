import { ImmerStateCreator } from "./types";

export interface AppStateSlice {
  selectedDate: number;
  selectedMonth: number;
  selectedYear: number;
  selectDate: (date: number) => void;
  selectMonth: (month: number) => void;
  selectYear: (year: number) => void;
}

export const appStateSlice: ImmerStateCreator<AppStateSlice> = (set) => ({
  selectedDate: new Date().getDate(),
  selectedMonth: new Date().getMonth(),
  selectedYear: new Date().getFullYear(),
  selectDate: (date: number) => {
    set((state) => {
      state.selectedDate = date;
    });
  },
  selectMonth: (month: number) => {
    set((state) => {
      state.selectedMonth = month;
    });
  },
  selectYear: (year: number) => {
    set((state) => {
      state.selectedYear = year;
    });
  },
});
