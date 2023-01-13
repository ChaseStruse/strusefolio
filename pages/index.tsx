import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/chase-projects/projects";
import ContactCard from "../components/contact/contact-card";
import Profile from "../components/profile/profile";

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
        <Profile />
        <Projects />
        <ContactCard />
      </main>
    </div>
  );
}
