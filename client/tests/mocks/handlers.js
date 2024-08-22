import { http, HttpResponse } from 'msw'
import { profile } from '../data/profile'
 
export const handlers = [
  // profiles
  http.get(`${import.meta.env.VITE_API_URL}/profiles`, () => {
    return HttpResponse.json(profile)
  }),

  // interests
  http.get(`${import.meta.env.VITE_API_URL}/userInterests`, () => {
    return HttpResponse.json(profile)
  }),
]