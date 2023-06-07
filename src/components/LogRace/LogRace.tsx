// npm modules
import { useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// css
import styles from './LogRace.module.css'
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
  watchable: "-",
  rating: 1,
  thoughts: "",
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={styles.openLog} variant="contained"  onClick={handleClickOpen}>
        Log Race
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Log Race</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out this form to log a race you have watched
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{width: .95}}
              required
              type="text"
              name="circuit"
              label="Circuit"
              id="circuit-input"
              value={formData.circuit}
              placeholder="Circuit"
              onChange={handleChange}
            />
            <TextField
              sx={{width: .95}}
              required
              type="text"
              name="winner"
              label="Winner"
              id="winner-input"
              value={formData.winner}
              placeholder="Winner"
              onChange={handleChange}
            />
            <TextField
              sx={{width: .95}}
              required
              type="text"
              name="cnstrc"
              label="Constructor"
              id="cnstrc-input"
              value={formData.cnstrc}
              placeholder="Constructor"
              onChange={handleChange}
            />
            <Select
              id="rating-select"
              value={formData.rating}
              label="Score"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            <Button type="submit" onClick={handleClose}>Submit</Button>
          </form>
        </DialogContent>
          <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    </div>
  )
}

export default LogRace