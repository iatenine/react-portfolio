import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GitHubActivity = () => {
  return (
    <div id="github-calendar">
      <h2>
        <i className="fa fa-github p-1" />
        GitHub Activity
      </h2>
      <div className="d-flex justify-content-center">
        <GitHubCalendar
          username="iatenine"
          responsive={false}
          tooltip={true}
        ></GitHubCalendar>
      </div>
    </div>
  );
};
