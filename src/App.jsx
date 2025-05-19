import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./components/Navigation";
import LeaderboardPage from "./pages/LeaderboardPage";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncPreloadProcess } from "./states/isPreload/action";
import CreatePage from "./pages/CreatePage";
import Loading from "./components/Loading";

function App() {
  const isPreload = useSelector((states) => states.isPreload);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  return (
    <div className="app-container bg-background-darker ">
      <Loading />
      <Header />
      <main className="max-w-[800px] mx-auto md:pt-4 pb-12 md:pb-20 min-h-dvh">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/new" element={<CreatePage />} />
        </Routes>
      </main>
      <aside className="fixed z-10 bottom-0 left-0 w-full ">
        <Navigation />
      </aside>
    </div>
  );
}

export default App;
