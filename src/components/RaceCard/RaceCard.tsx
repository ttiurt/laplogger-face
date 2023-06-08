// npm modules
import { useState, useEffect } from 'react'

// services
import * as raceService from '../../services/raceService'

// css
import styles from './RaceCard.module.css'

// import LogRace from '../LogRace/LogRace'

// types
import { Race, User } from '../../types/models'


interface RaceCardProps {
  race: Race
  user: User
  onDelete: (raceId: number) => Promise<void> 
}

const RaceCard = (props: RaceCardProps): JSX.Element => {
  const [races, setRaces] = useState<Race[]>([])

  const { user, race, onDelete } = props

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



  const isCreator = () => {
    return user.profile.id === race.creatorId
  }

  const handleDeleteRace = () => {
    if (race.id) {
      onDelete(race.id)
    }
  }

  return (
    <div>
      {races.map((race: Race) => (
        <>
          <ul key={race.id}>
            <h1>{race.circuit}</h1>
            <p>Winner: {race.winner}</p>
            <p>Constructor: {race.cnstrc}</p>
            <p>Thoughts: {race.thoughts}</p>
            <p>Watch Again? {race.watchable}</p>
            <p>Rating: {race.rating}/10</p>
          </ul>
          <div>
            {isCreator() ? (
              <button onClick={handleDeleteRace}>DELETE</button>
            ):("")}
          </div>
        </>
        
        
      ))}
    </div>
  )
}

export default RaceCard