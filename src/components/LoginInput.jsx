import React from "react";
import useInput from "../hooks/useInput";

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="border-2 px-2 py-1 "
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="border-2 px-2 py-1 "
      />
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="bg-primary py-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
