import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Image
        priority
        src="/images/profile.jpeg"
        height={120}
        width={120}
        alt=""
        className={styles.profileImage}
      />
      <h1 className={styles.name}>Chase Struse</h1>
      <p className={styles.occupation}>Full Stack Developer</p>
      <div className={styles.socials}>
        <a href="https://www.github.com/chasestruse">
          <FontAwesomeIcon icon={faGithub} className={styles.socials} />
        </a>
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} className={styles.socials} />
        </a>
      </div>
      <div className={styles.experience}>
        <h2>Experience</h2>
        <p>C# / .NET: 4 years</p>
        <p>React: 1 year</p>
        <p>Angular: 2 years</p>
        <p>SQL: 2 years</p>
        <p>AWS: 1 year</p>
        <p>GCloud: 1.5 years</p>
        <p>Jira: 4 years</p>
        <p>Azure Devops: 1 year</p>
        <p>Git and Github: 4 years</p>
      </div>
    </div>
  );
}
