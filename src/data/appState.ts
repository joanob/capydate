import { UserService } from "../services/userService";
import { User } from "../types/User";
import { ImmerStateCreator } from "./types";

export interface AppStateSlice {
  isSessionChecked: boolean;
  user: User;
  selectedDate: number;
  selectedMonth: number;
  selectedYear: number;
  checkSession: () => void;
  selectDate: (date: number) => void;
  selectMonth: (month: number) => void;
  selectYear: (year: number) => void;
}

export const appStateSlice: ImmerStateCreator<AppStateSlice> = (set) => ({
  isSessionChecked: false,
  user: {} as User,
  selectedDate: new Date().getDate(),
  selectedMonth: new Date().getMonth(),
  selectedYear: new Date().getFullYear(),
  checkSession() {
    UserService.getUser().then((user) => {
      if (user.id) {
        set((state) => {
          (state.user = user), (state.isSessionChecked = true);
        });
      } else {
        set((state) => {
          state.isSessionChecked = true;
        });
      }
    });
  },
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
