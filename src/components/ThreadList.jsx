import React from "react";
import ThreadItem from "./ThreadItem";

export default function ThreadList({ threads }) {
  return (
    <div className="flex flex-col gap-2 w-full bg-background-light md:p-4 rounded-xl lg:order-1">
      <p className="px-4 font-bold md:px-0 lg:text-xl">Thread tersedia</p>
      {threads.map((thread, index) => {
        return <ThreadItem key={index} {...thread} />;
      })}
    </div>
  );
}
