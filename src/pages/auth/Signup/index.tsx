import { useState } from "react";
import { AuthService } from "../../../services/authService";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    AuthService.signup(username, password);
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <button onClick={onSubmit}>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
