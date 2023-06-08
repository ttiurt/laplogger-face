// npm modules
import { useState, useEffect } from 'react'

// services
import * as raceService from '../../services/raceService'

// css
import styles from './AllRaces.module.css'

//comps
import LogRace from '../../components/LogRace/LogRace'
import RaceCard from '../../components/RaceCard/RaceCard'

// types
import { Race, User } from '../../types/models'
// import { RaceFormData } from '../../types/forms'

interface RaceProps {
  races: Race[]
  user: User
}

const AllRaces = (props: RaceProps): JSX.Element => {
  const [races, setRaces] = useState<Race[]>([])

  const { user } = props

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

  const handleLogRace = async (formData: Race)  => {
    try {
      const newRace = await raceService.create(formData)
      setRaces([newRace, ...races])
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteRace = async (raceId: number): Promise<void> => {
    try {
      await raceService.deleteRace(raceId)
      const nextRaces = races.filter((race) => race.id !== raceId)
      setRaces(nextRaces)
    } catch (error) {
      console.log(error)
    }
  }

  if (!races.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.racesWatched}>Community Thoughts</h1>
      <LogRace onSubmit={handleLogRace} />
      {races.map((race: Race) => (
        <RaceCard 
          key={race.id}
          race={race}
          onDelete={handleDeleteRace}
          // onSubmit={handleUpdateRace}
          user={user}
        />
      ))}
    </main>
  )
}

export default AllRaces