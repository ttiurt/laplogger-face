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
    if (user?.profile.id) return user.profile.id === race.creatorId
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
        <details key={race.id}>
          <summary className={styles.summary}>
            <div className={styles.logCirc}>{race.circuit}</div>
          </summary>
          <div className={styles.logShow}>
            <div className={styles.wnnr}>
              <h3>Winner:</h3> 
              {race.winner}
            </div>
            <div className={styles.cnstrc}>
              <h3>Constructor:</h3>
              {race.cnstrc}
            </div>
            <div className={styles.thghts}><h3>Thoughts:</h3></div>
            <div className={styles.thghtsTxt}>{race.thoughts}</div>
            <div className={styles.wtchbl}>
              <h3>Watch Again?</h3> 
              {race.watchable}
            </div>
            <div className={styles.rtng}>
              <h3>Rating:</h3> 
              {race.rating}/10
            </div>
          </div>
          <div className={styles.btnCntnr}>
            <div>
              {isCreator() ? (
                <button className={styles.dltBtn} onClick={handleDeleteRace}>DELETE</button>
              ):("")}
            </div>
            <div>
              {isCreator() ? (
                <EditRace onSubmit={handleSubmit} />
              ):("")}
            </div>
          </div>
          
        </details>
        
      </>
    </div>
  )
}
export default RaceCard