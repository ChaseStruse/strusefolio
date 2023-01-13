import styles from "./project-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  repoLink: string;
  languageUsed: string;
};

export default function ProjectCard({
  title,
  description,
  repoLink,
  languageUsed,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <a href={repoLink}>
        {title}
      </a>
      <h6>Languages/Frameworks Used: {languageUsed}</h6>
      <p>{description}</p>
      <Image
        priority
        src="/images/national_parks.jpeg"
        height={120}
        width={120}
        alt=""
        className={styles.screenCapture}
      />
    </div>
  );
}
