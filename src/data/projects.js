import ultimateSystemPreview from "../img/previews/game-library-current.png";
import weatherAppPreview from "../img/previews/weather-preview-desktop.png";
import gesGazetteHomePreview from "../img/previews/ges-gazette-home-preview.png";

export const Projects = [
  {
    title: "GES Gazette",
    subtitle: "A bilingual sister publication to The Denver North Star",
    image: gesGazetteHomePreview,
    altText: "Splash page prompting user to login or signup",
    deploymentLink: "https://gesgazette.com",
    sourceLink: "https://github.com/iatenine",
    technologies: ["WordPress", "Gutenberg", "PHP", "CSS3", "HTML5"],
    description: `Built from the ground-up in WordPress. This proved to be an interesting design challenge,
    both trying to emulate a site that looked similar enough to be recognized as part of the same brand while giving the new publication its own
    feel. A decent amount of custom CSS went into meeting all project requirements particularly as I had no access to the Genesis framework the previous
    site was built upon but it provided the opportunity to improve in many areas`,
  },
  {
    title: "Ultimate System",
    subtitle: "Steam Match Finding Service",
    image: ultimateSystemPreview,
    altText: "Splash page prompting user to login or signup",
    deploymentLink: "https://blooming-stream-34219.herokuapp.com/",
    sourceLink: "https://github.com/iatenine/ultimate-system",
    technologies: [
      "JQuery",
      "Heroku",
      "ExpressJS",
      "MySQL",
      "Bootstrap",
      "Handlebars",
      "Steam Web API",
      "JawsDB",
      "CSS3",
      "HTML5",
    ],
    description: `Built with 3 other developers, Ultimate System attempts to connect players who would otherwise not
    know of one another's existence with similar games. This was an ambitious project we attempted to complete in the
    course of the week with aims to connect Sony, Steam and Microsoft APIs to reach across various platforms' walled
    gardens. Though only the Steam API was integrated by the deadline, future improvements are likely`,
  },
  {
    title: "Weather Dashboard",
    subtitle: "Worldwide Weather Data",
    image: weatherAppPreview,
    altText: "5 Day Forecast App with City Lookup and Auto-Complete",
    deploymentLink: "https://iatenine.github.io/weather-dashboard/",
    sourceLink: "https://github.com/iatenine/weather-dashboard",
    technologies: [
      "JavaScript",
      "JQuery",
      "OpenWeather API",
      "Bootstrap",
      "Git",
      "HTML5",
      "CSS3",
    ],
    description: `An early academic exercise and hardly revolutionary, this project still received a lot of
    polish and revision after completion. At a certain point it became preferable to leave this app on a minimized
    browser window over opening my normal weather app. With more use, it became obvious that mobile responsiveness
    was paramount and once that was achieved I spent a long time figuring out the right balance between app load speed
    and a robust list of cities to be included in the autocomplete. Luckily, somebody had compiled a list of the 1,000
    most populous cities wordlwide. I found including the top 250 from that list caused a negligible increase in load
    times while serving a significant percentage of the global population`,
  },
];
