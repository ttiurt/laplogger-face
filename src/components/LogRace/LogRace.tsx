// npm modules
import { useState } from "react"

// css

// types
import { RaceFormData } from "../../types/forms"
import { Race } from "../../types/models"

interface RaceFormProps {
  onSubmit: (formData: Race) => Promise<void>
  race: Race
}

const defaultFormData = {
  circuit: "",
  winner: "",
  cnstrc: "",
  watchable: false,
  creatorId: 0,
  createdAt: "",
  updatedAt: "",
}

const LogRace = (props: RaceFormProps) => {
  const [formData, setFormData] = useState<RaceFormData>(props.race || defaultFormData)

  const handleChange = (evt: { target: { name: any; value: any } }) => {
    console.log(evt.target.name)
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    console.log(formData)
    evt.preventDefault()
    props.onSubmit(formData).then(() => setFormData(defaultFormData))
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="circuit-input">Circuit</label>
      <input
        required
        type="text"
        name="circuit"
        id="circuit-input"
        placeholder="Circuit"
        value={formData.circuit}
        onChange={handleChange}
      />

      <label htmlFor="winner-input">Winner</label>
      <input
        required
        type="text"
        name="winner"
        value={formData.winner}
        id="winner-input"
        placeholder="Winner"
        onChange={handleChange}
      />
      <label htmlFor="cnstrc-input">Winning Constructor</label>
      <input
        required
        type="text"
        name="cnstrc"
        value={formData.cnstrc}
        id="cnstrc-input"
        placeholder="Winning Constructor"
        onChange={handleChange}
      />
      <label htmlFor="watchable-input">Watch Again?</label>
      <input 
        type="checkbox"
        id="watchable-input"
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default LogRace