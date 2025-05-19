import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    if (authUser) navigate("/");
  }, [authUser, navigate]);

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="h-[70vh] grid place-items-center">
      <div className="bg-background-light p-4 rounded-lg">
        <header className="flex justify-center mb-5">
          <h3 className="font-bold uppercase">Log in</h3>
        </header>
        <article className="flex flex-col gap-4">
          <LoginInput login={onLogin} />
          <p className="flex justify-center gap-1">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
}

export default LoginPage;
