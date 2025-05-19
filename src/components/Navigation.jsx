import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { RiChatThreadLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUnsetUserAuth } from "../states/authUser/action";

export default function Navigation() {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetUserAuth());
  };

  return (
    <nav className="w-full bg-primary px-3 lg:pl-18 py-4 h-14 flex items-center gap-4">
      <ul className="flex justify-around items-center w-full text-text-accent">
        <li>
          <Link to={"/"} className="flex flex-col items-center">
            <RiChatThreadLine className="text-2xl " />
            <span className="text-xs ">Thread</span>
          </Link>
        </li>
        <li>
          <Link to={"/leaderboard"} className="flex flex-col items-center">
            <MdLeaderboard className="text-2xl " />
            <span className="text-xs ">Leaderboard</span>
          </Link>
        </li>
        <li>
          {authUser ? (
            <button onClick={onSignOut} className="flex flex-col items-center">
              <GiExitDoor className="text-2xl " />
              <span className="text-xs ">Log out</span>
            </button>
          ) : (
            <Link to={"/login"} className="flex flex-col items-center">
              <GiExitDoor className="text-2xl " />
              <span className="text-xs ">Log in</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
