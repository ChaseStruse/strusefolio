import styles from "./projects.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type ProjectCardProps = {
    title: string;
    description: string;
    repoLink: string;
    languageUsed: string;
}

export default function ProjectCard({title, description, repoLink, languageUsed}: ProjectCardProps){
    return(
        <div className={styles.projectCard}>
            <a href={repoLink}>{title} <FontAwesomeIcon icon={faGithub} className={styles.icon}/></a>
            <h6>Languages/Frameworks Used: {languageUsed}</h6>
            <p>{description}</p>
        </div>
    )
}
