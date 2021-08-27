// dependencies
import { useQuery } from "react-query"
// services
import { api } from "../services/api.service"
// types
type User = {
  id: number
  name: string
  email: string
  created_at: string
}

export async function getUsers (): Promise<User[]> {
  const { data } = await api.get( '/users' )

  const users = data.users.map( ( user: User ) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date( user.created_at ).toLocaleDateString( 'es-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      } ),
    }
  } )

  return users
}

export function useUsers () {
  return useQuery( 'users', getUsers )
}