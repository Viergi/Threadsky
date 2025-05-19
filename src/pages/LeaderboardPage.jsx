import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  asyncReceiveLeaderboards,
  clearLeaderboardsActionCreator,
} from "../states/leaderboards/action";
import LeaderboardsList from "../components/LeaderboardsList";

export default function LeaderboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
    return () => {
      dispatch(clearLeaderboardsActionCreator());
    };
  }, [dispatch]);

  return (
    <div className="p-2 max-w-[600px] mx-auto">
      <h2 className="font-bold py-3 text-2xl">ScoreBoard</h2>
      <LeaderboardsList />
    </div>
  );
}
