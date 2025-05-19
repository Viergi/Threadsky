import React from "react";
import { useSelector } from "react-redux";

export default function LeaderboardsList() {
  const leaderboards = useSelector((states) => states.leaderboards);
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        className={`flex gap-2 items-center px-2 py-1 bg-background-light rounded-md lg:text-xl`}
      >
        <span className="font-bold w-8">No.</span>
        <span className="grow">Name</span>
        <span className="font-bold">Score</span>
      </div>
      {leaderboards.map((item, index) => {
        return (
          <div
            className={`flex gap-2 items-center border border-black/5 shadow-sm px-2 py-1 bg-background-light rounded-md lg:text-xl`}
            key={index}
          >
            <span className="font-bold w-8">{index + 1}.</span>
            <img
              src={item.user.avatar}
              className="aspect-square h-6 rounded-full lg:h-10"
            ></img>
            <span className="grow">{item.user.name}</span>
            <span className="font-bold ">{item.score}</span>
          </div>
        );
      })}
    </div>
  );
}
