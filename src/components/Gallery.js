import React from "react";
import dayPlannerPreview from "../img/previews/planner-preview-desktop.png";
import ultimateSystemPreview from "../img/previews/ultimate-system-splash.png";
import { Project } from "./Project";

/*
  addProject(
    "Currency Exchange App",
    "Current and Historical Forex Data",
    "assets/img/previews/updated-forex-app.png",
    "Form with options to select different currencies and set the date to check the exchange rate",
    "https://iatenine.github.io/currency-exchange-app/",
    "https://github.com/iatenine/currency-exchange-app"
  );

  addProject(
    "Weather Dashboard",
    "Worldwide Weather Data",
    "assets/img/previews/weather-preview-desktop.png",
    "5 day forecast app with city lookup and auto-complete",
    "https://iatenine.github.io/weather-dashboard/",
    "https://github.com/iatenine/weather-dashboard"
  );

  addProject(
    "Tech Blog",
    "Text Based Blog",
    "assets/img/previews/tech-blog-preview.png",
    "User dashboard with options to create, view, update and delete posts",
    "https://immense-stream-52076.herokuapp.com/dashboard",
    "https://github.com/iatenine/tech-blog"
  );
*/

export const Gallery = () => {
  const title = `Projects`;
  const dProject = {
    title: "Day Planner",
    subtitle: "Hourly Day Planner",
    image: dayPlannerPreview,
    altText: "Hourly day planner",
    deploymentLink: "https://iatenine.github.io/day-planner/",
    sourceLink: "https://github.com/iatenine/day-planner",
  };

  const eProject = {
    title: "Ultimate System",
    subtitle: "Steam Match Finding Service",
    image: ultimateSystemPreview,
    altText: "Splash page prompting user to login or signup",
    deploymentLink: "https://blooming-stream-34219.herokuapp.com/",
    sourceLink: "https://github.com/iatenine/ultimate-system",
  };

  return (
    <section className="hoverable" id="projects">
      <h2>{title}</h2>

      {/* <!-- Gallery --> */}
      <div className="gallery header">
        {/* <!-- Gallery Showcase Project --> */}
      </div>

      <div className="gallery main-gallery">
        {/* <!-- Gallery Main Section --> */}
        <Project props={dProject} />
        <Project props={eProject} />
      </div>
    </section>
  );
};
