import { api } from "./apiConfig";

export const AuthService: {
  signup: (username: string, password: string) => void;
  login: (username: string, password: string) => void;
} = {
  signup(username, password) {
    api.post("/auth/signup", { username, password }).then((res) => {});
  },
  login(username, password) {
    api.post("/auth/login", { username, password }).then((res) => {});
  },
};
