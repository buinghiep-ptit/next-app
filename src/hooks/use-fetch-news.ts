import { fetchPerson } from '@/api-client'
import { useQuery } from 'react-query'

/*This function won't send an http request if not necessary.
 * So we can use this function to sync states in different components
 * */
export default function useFetchNews() {
  return useQuery('heroes', () => fetchPerson())
}
