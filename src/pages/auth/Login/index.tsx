import { useState } from "react";
import { AuthService } from "../../../services/authService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    AuthService.login(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Username{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
