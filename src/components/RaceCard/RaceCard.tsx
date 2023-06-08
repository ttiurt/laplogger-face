// css
import styles from './RaceCard.module.css'

//comps
import EditRace from '../EditRace/EditRace';

// types
import { Race, User } from '../../types/models'
import { RaceFormData } from '../../types/forms';



interface RaceCardProps {
  race: Race
  user: User | null;
  onDelete: (raceId: number) => Promise<void> 
  onSubmit: (formData: RaceFormData) => void
}

const RaceCard = (props: RaceCardProps): JSX.Element => {
  const { user, race, onDelete, onSubmit } = props

  const isCreator = () => {
    return user.profile.id === race.creatorId
  }

  const handleDeleteRace = () => {
    if (race.id) {
      onDelete(race.id)
    }
  }

  const handleSubmit = (formData: RaceFormData) => {
    onSubmit({ id: race.id, ...formData })
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
        <div>
          {isCreator() ? (
            <EditRace onSubmit={handleSubmit} />
          ):("")}
        </div>
      </>
    </div>
  )
}
export default RaceCard