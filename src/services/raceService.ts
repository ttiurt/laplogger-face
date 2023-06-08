import * as tokenService from './tokenService'

import { Race } from '../types/models'
import { RaceFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/races`

async function index(): Promise<Race[]> {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return (await res.json()) as Race[]
}

async function create(formData: RaceFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// async function update(raceFormData) {
//   try {
//     const res = await fetch(`${BASE_URL}/${raceFormData._id}`,{
//       method: 'PUT',
//       headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(raceFormData)
//     })
//     return res.json()
//   } catch(error) {
//     console.log(error)
//   }
// }

async function deleteRace(raceId) {
  try {
    const res= await fetch(`${BASE_URL}/${raceId}`, {
      method:'Delete',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



export { index, create, update, deleteRace }