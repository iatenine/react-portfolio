import ultimateSystemPreview from "../img/previews/ultimate-system-splash.png";
import weatherAppPreview from "../img/previews/weather-preview-desktop.png";
import currencyPreview from "../img/previews/currency-preview.png";

export const Projects = [
  {
    title: "GES Gazette",
    subtitle: "A bilingual sister publication to The Denver North Star",
    image: ultimateSystemPreview,
    altText: "Splash page prompting user to login or signup",
    deploymentLink: "https://gesgazette.com",
    sourceLink: "https://github.com/iatenine",
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
  },
  {
    title: "Weather Dashboard",
    subtitle: "Worldwide Weather Data",
    image: weatherAppPreview,
    altText: "5 Day Forecast App with City Lookup and Auto-Complete",
    deploymentLink: "https://iatenine.github.io/weather-dashboard/",
    sourceLink: "https://github.com/iatenine/weather-dashboard",
  },
  {
    title: "Currency Exchange App",
    subtitle: "Current and Historical Forex Data",
    image: currencyPreview,
    altText:
      "Form with options to select different currencies and set the date to check the exchange rate",
    deploymentLink: "https://iatenine.github.io/currency-exchange-app/",
    sourceLink: "https://github.com/iatenine/currency-exchange-app",
  },
];
