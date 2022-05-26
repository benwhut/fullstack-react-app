import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/molecules/Hero'
import { LandingBody } from '../components/organisms/LandingBody'
import { LandingFooter } from '../components/organisms/LandingFooter'
import { TopBar } from '../components/organisms/TopBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuperApp</title>
        <meta name="description" content="Fullstack React App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Hero />
      <LandingBody />
      <LandingFooter />
    </div>
  )
}

export default Home