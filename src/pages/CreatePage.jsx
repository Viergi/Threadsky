import React, { useRef, useState } from "react";
import useInput from "../hooks/useInput";
import { asyncAddThread } from "../states/threads/action";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePage() {
  const authUser = useSelector((states) => states.authUser);
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, setBody] = useState("");
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBodyInput = () => {
    if (bodyRef.current) {
      setBody(bodyRef.current.innerHTML);
    }
  };

  function onSubmit(event) {
    event.preventDefault();
    dispatch(asyncAddThread({ title, category, body }));
    navigate("/");
  }

  if (!authUser) return <Navigate to={"/"} replace />;

  return (
    <section className="p-4">
      <form
        className="flex flex-col gap-2 bg-background-light px-4 py-4 rounded-md"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={onTitleChange}
          className="border px-2 py-1 rounded-sm"
        />
        <input
          type="text"
          placeholder="Kategori"
          value={category}
          className="border px-2 py-1 rounded-sm"
          onChange={onCategoryChange}
        />
        <div
          ref={bodyRef}
          contentEditable="true"
          className="border px-2 py-1 h-30 rounded-sm"
          onInput={handleBodyInput}
        />
        <button type="submit" className="bg-primary rounded-md py-2">
          Buat
        </button>
      </form>
    </section>
  );
}
