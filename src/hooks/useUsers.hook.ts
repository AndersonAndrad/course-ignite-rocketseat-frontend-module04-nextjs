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

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export async function getUsers ( currentPage: number ): Promise<GetUsersResponse> {
  const { data, headers } = await api.get( '/users', {
    params: {
      page: currentPage
    }
  } )

  const totalCount = Number( headers['x-total-count'] )

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

  return {
    users,
    totalCount
  }
}

export function useUsers ( currentPage: number ) {
  return useQuery( ['users', currentPage], () => getUsers( currentPage ), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  } )
}