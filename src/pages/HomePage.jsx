import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { BsFeather } from "react-icons/bs";

export default function HomePage() {
  const threads = useSelector((states) => states.threads);
  const authUser = useSelector((states) => states.authUser);
  const users = useSelector((states) => states.users);
  const selectedCategory = useSelector((states) => states.selectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));
  const threadListSelectedCategory = threadList.filter((thread) => {
    return thread.category == selectedCategory;
  });

  return (
    <section className="text-text-primary flex flex-col md:gap-3 mx-auto md:w-[680px] lg:mx-0 lg:flex-row lg:w-full">
      <CategoryList threads={threads} />
      <ThreadList
        threads={selectedCategory ? threadListSelectedCategory : threadList}
      />
      {authUser && (
        <Link
          to={"/new"}
          className="fixed z-10 flex items-center bottom-20 rounded-full right-8 bg-primary p-3 text-sm text-accent"
        >
          <BsFeather />+
        </Link>
      )}
    </section>
  );
}
