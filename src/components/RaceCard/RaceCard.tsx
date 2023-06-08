// css
import styles from './RaceCard.module.css'



// types
import { Race, User } from '../../types/models'


interface RaceCardProps {
  race: Race
  user: User
  onDelete: (raceId: number) => Promise<void> 
}

const RaceCard = (props: RaceCardProps): JSX.Element => {
  const { user, race, onDelete } = props

  const isCreator = () => {
    return user.profile.id === race.creatorId
  }

  const handleDeleteRace = () => {
    if (race.id) {
      onDelete(race.id)
    }
  }

  return (
    <div className={styles.raceCardCntnr}>
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
    </div>
  )
}

export default RaceCard