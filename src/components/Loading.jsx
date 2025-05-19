import React from "react";
import LoadingBar from "react-redux-loading-bar";

export default function Loading() {
  return (
    <div className="sticky top-14 z-20">
      <LoadingBar
        style={{ backgroundColor: "blue", position: "absolute", height: "3px" }}
      ></LoadingBar>
    </div>
  );
}
