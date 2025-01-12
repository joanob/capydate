import { UserService } from "../services/userService";
import { User } from "../types/User";
import { ImmerStateCreator } from "./types";

export interface AppStateSlice {
  isSessionChecked: boolean;
  user: User;
  checkSession: () => void;
}

export const appStateSlice: ImmerStateCreator<AppStateSlice> = (set) => ({
  isSessionChecked: false,
  user: {} as User,
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
});
