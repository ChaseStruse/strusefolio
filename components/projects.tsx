import ProjectCard from "./project-card";
import style from "./projects.module.css";

export default function Projects() {
  var projects = [
    {
      id: 1,
      title: "National Parks Command Line App",
      description: "Command line app that gives information on national parks",
      repoLink: "https://www.github.com/ChaseStruse/national-parks-cla",
      languageUsed: "Python",
    },
    {
      id: 2,
      title: "Basketball Bot",
      description: "Discord bot that can show NBA stats based on the command",
      repoLink: "https://www.github.com/ChaseStruse/basketball-bot",
      languageUsed: "Python",
    },
    {
      id: 3,
      title: "Weather Bot",
      description: "Discord bot that shows the forecasted temperatures",
      repoLink: "https://www.github.com/ChaseStruse/weather-bot",
      languageUsed: "Python",
    },
    {
      id: 4,
      title: "NextJs Blog",
      description:
        "Blog site created following the Next.js tutorial and expanded from there",
      repoLink: "https://www.github.com/ChaseStruse/nextjs-blog",
      languageUsed: "Next.js",
    },
    {
        id: 5,
        title: "NextJs Blog",
        description:
          "Blog site created following the Next.js tutorial and expanded from there",
        repoLink: "https://www.github.com/ChaseStruse/nextjs-blog",
        languageUsed: "Next.js",
      },
      {
        id: 6,
        title: "NextJs Blog",
        description:
          "Blog site created following the Next.js tutorial and expanded from there",
        repoLink: "https://www.github.com/ChaseStruse/nextjs-blog",
        languageUsed: "Next.js",
      },
  ];
  return (
    <div className={style.projectContainer}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
          languageUsed={project.languageUsed}
        />
      ))}
    </div>
  );
}
