import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const pathnameToTitle = {
    "": "Homepage",
    leaderboard: "Leaderboard",
    login: "Login",
    register: "Register",
    new: "New Thread",
    thread: "Detail",
  };

  return (
    <header className="sticky top-0 text-text-accent">
      <div className="w-full bg-primary px-3 md:pl-12 lg:pl-18 py-4 h-14 flex items-center gap-4">
        <h1 className="font-extrabold text-2xl text-shadow-2xs text-shadow ">
          Threadsky
        </h1>
        <div className="h-full flex items-end relative">
          {pathnameToTitle[location.pathname.split("/")[1]] && (
            <div className="w-1 h-5 absolute top-1/5 left-0 bg-white -translate-x-1/2 rotate-20 rounded-2xl"></div>
          )}
          <p className="text-xs ml-3 text-shadow">
            {pathnameToTitle[location.pathname.split("/")[1]]}
          </p>
        </div>
      </div>
    </header>
  );
}
