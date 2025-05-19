import React from "react";
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={onChangeName}
        minLength={5}
        className="border-2 px-2 py-1 "
      ></input>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
        className="border-2 px-2 py-1 "
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChangePassword}
        className="border-2 px-2 py-1 "
      ></input>
      <button
        type="button"
        onClick={() => register({ name, email, password })}
        className="bg-primary py-2 rounded-lg"
      >
        Daftar
      </button>
    </form>
  );
}
