export const Technologies = {
  languages: [
    "JavaScript (ES6)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "Java",
  ],
  frontends: [
    "React",
    "Angular",
    "Handlebars",
    "JQuery",
    "Bootstrap",
    "Tailwind",
  ],
  backends: ["NodeJS", "NestJS", "ExpressJS"],
  databases: ["MySql", "JawsDB", "MongoDB", "Atlas"],
  tools: [
    "Git",
    "Heroku",
    "Atlas",
    "GraphQL",
    "NPM",
    "Mongoose",
    "Sequelize",
    "Apollo",
    "Robo3T",
    "MySql Workbench",
    "Jest",
  ],
  methodologies: ["Agile", "Scrum", "Kanban"],
};

export const allSkills = [
  {
    label: "Backends",
    content: Technologies.backends,
    icon: "fa fa-server mx-2",
  },
  {
    label: "Databases",
    content: Technologies.databases,
    icon: "fa fa-database mx-2",
  },
  {
    label: "Languages",
    content: Technologies.languages,
    icon: "fa fa-code mx-2",
  },
  {
    label: "Tools",
    content: Technologies.tools,
    icon: "fa fa-wrench mx-2",
  },
  {
    label: "Frontends",
    content: Technologies.frontends,
    icon: "fa fa-television mx-2",
  },
  {
    label: "Methodologies",
    content: Technologies.methodologies,
    icon: "fa fa-building mx-2",
  },
];
