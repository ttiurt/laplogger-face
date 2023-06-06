// npm modules
import { useState, useEffect } from 'react'

// services
import * as raceService from '../../services/raceService'

// css
import styles from './AllRaces.module.css'

// types
import { Race } from '../../types/models'

const AllRaces = (): JSX.Element => {
  const [races, setRaces] = useState<Race[]>([])

  useEffect((): void => {
    const fetchRaces = async (): Promise<void> => {
      try {
        const raceData: Race[] = await raceService.index()
        setRaces(raceData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRaces()
  }, [])

  if (!races.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the races.</h1>
      {races.map((race: Race) => (
        <p key={race.id}>{race.circuit}</p>
      ))}
    </main>
  )
}

export default AllRaces