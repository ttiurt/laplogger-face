// css
import styles from './Landing.module.css'


const Landing = (): JSX.Element => {

  return (
    <>
      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>LAP LOGGER</h1>
        </div>
        <div className={styles.about}>
          <h2>WHAT IS LAP LOGGER?</h2>
          <p>Lap Logger is currently a website where fans of Formula 1 can post their opinions and ratings on recent races. Eventually the website will be molded into a place where you can log any race you’ve watched, past or present, to your profile to keep track of races you may or may not want to rewatch down the road. The goal is to provide a site similar to Letterboxd or MyAnimeList for the fans of Formula 1.</p>
          <p>To stay up to date on all things Lap Logger give us a follow over on <a className={styles.twit} href="https://twitter.com/TheLapLogger" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        </div>
      </main>
    </>
  )
}

export default Landing
