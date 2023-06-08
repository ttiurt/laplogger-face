// npm modules
import { useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormLabel } from "@mui/material";


// css
import styles from './LogRace.module.css'


// types
import { RaceFormData } from "../../types/forms"
import { Race } from "../../types/models"


interface RaceFormProps {
  onSubmit: (formData: RaceFormData) => Promise<void>
  race?: Race
}

const defaultFormData = {
  circuit: "",
  winner: "",
  cnstrc: "",
  watchable: "",
  rating: 1,
  thoughts: "",
}

const LogRace = (props: RaceFormProps) => {
  const [formData, setFormData] = useState<RaceFormData>(props.race || defaultFormData)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.name)
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    console.log(formData)
    evt.preventDefault()
    props.onSubmit(formData)
    setFormData(defaultFormData)
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
              sx={{width: .95, height: 70}}
              required
              type="text"
              name="circuit"
              label="Circuit"
              id="circuit-input"
              value={formData.circuit}
              placeholder="Ex: 'Spa' , 'Belgium GP' , 'Circuit de Spa-Francorchamps'"
              onChange={handleChange}
            />
            <TextField
              sx={{width: .95, height: 70}}
              required
              type="text"
              name="winner"
              label="Winner"
              id="winner-input"
              value={formData.winner}
              placeholder="Ex: 'Verstappen'"
              onChange={handleChange}
            />
            <TextField
              sx={{width: .95, height: 70}}
              required
              type="text"
              name="cnstrc"
              label="Constructor"
              id="cnstrc-input"
              value={formData.cnstrc}
              placeholder="Ex: 'Redbull'"
              onChange={handleChange}
            />
            <TextField
              sx={{width: .95, height: 70}}
              required
              type="text"
              name="thoughts"
              label="Thoughts on the Race"
              id="thoughts-input"
              value={formData.thoughts}
              placeholder="Ex: 'Another Max masterclass!'"
              onChange={handleChange}
            />
            <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
              <FormLabel id="rating-select-label">Rating</FormLabel>
              <Select
                required
                name="rating"
                id="rating-select"
                value={formData.rating}
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
              <FormLabel id="watchable-select-label">Watch Again?</FormLabel>
              <Select
                required
                name="watchable"
                id="watchable-select"
                value={formData.watchable}
                placeholder="Watch Again?"
                onChange={handleChange}
              >
                <MenuItem value={'yes'}>Yes</MenuItem>
                <MenuItem value={'no'}>No</MenuItem>
              </Select>
            </FormControl>
            <Button className={styles.subBtn} type="submit" onClick={handleClose}>Submit</Button>
          </form>
        </DialogContent>
          <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    </div>
  )
}

export default LogRace