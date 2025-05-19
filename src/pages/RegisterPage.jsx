import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../states/users/action";
import RegisterInput from "../components/RegisterInput";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }) => {
    try {
      await dispatch(asyncRegisterUser({ email, name, password }));
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="h-[70vh] grid place-items-center">
      <div className="bg-background-light rounded-lg p-4">
        <header className="flex justify-center mb-5">
          <h2 className="font-bold uppercase">Register</h2>
        </header>
        <article className="flex flex-col gap-4">
          <RegisterInput register={handleSubmit} />
          <p className="flex justify-center gap-1">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
}
