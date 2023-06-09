// services
import * as tokenService from './tokenService'

// types
import { 
  ChangePasswordFormData,
  LoginFormData,
  SignupFormData,
} from '../types/forms'
import { User } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/auth`

async function signup(
  signupFormData: SignupFormData, 
): Promise<void> {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupFormData),
  })
  const json = await res.json()

  if (json.err) throw new Error(json.err)
  
  if (json.token) {
    tokenService.setToken(json.token)
  }
}

function getUser(): User | null {
  return tokenService.getUserFromToken()
}

function logout(): void {
  tokenService.removeToken()
}

async function login(loginFormData: LoginFormData): Promise<void> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginFormData),
  })
  const json = await res.json()

  if (json.err) throw new Error(json.err)

  if (json.token) tokenService.setToken(json.token)
}

async function changePassword(
  changePasswordFormData: ChangePasswordFormData
): Promise<void> {
  const res = await fetch(`${BASE_URL}/change-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(changePasswordFormData),
  })
  const json = await res.json()

  if (json.err) throw new Error(json.err)

  if (json.token) {
    tokenService.removeToken()
    tokenService.setToken(json.token)
  }
}

export { signup, getUser, logout, login, changePassword }
