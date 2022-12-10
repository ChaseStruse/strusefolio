import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strusefolio</title>
        <meta
          name="description"
          content="Portfolio for Chase Struse, Strusefolio"
        />
        <link rel="icon" href="/images/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
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
              <FontAwesomeIcon icon={faGithub} className={styles.socials}/>
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
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
        <Projects />
        <div className={styles.contactMe}>
          <h1>Contact</h1>
          <p> Test </p>
        </div>
      </main>
    </div>
  );
}
