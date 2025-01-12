import { api } from "./apiConfig";
import { User } from "../types/User";

export const UserService: {
  getUser: () => Promise<User>;
} = {
  async getUser() {
    try {
      const { data } = await api.get("/user", {
        withCredentials: true,
      });
      return data as User;
    } catch (error) {
      return {} as User;
    }
  },
};
