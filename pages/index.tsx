/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strusefolio</title>
        <meta name="description" content="Portfolio for Chase Struse, Strusefolio" />
        <link rel="icon" href="/images/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, I'm Chase Struse
        </h1>
        <p className={styles.description}>
          Welcome to my Strusefolio!
        </p>
      </main>
    </div>
  )
}
