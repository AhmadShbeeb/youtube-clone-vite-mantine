import { Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

export const SearchFeed = () => {
  const { searchTerm } = useParams()

  const searchVideos = useQuery(
    ['searchVideos', searchTerm],
    async ({ signal }) => await fetchFromAPI(`search/?q=${searchTerm}`, signal)
  )

  return (
    <>
      <Title order={3} color='dimmed' italic mb={12}>
        Search Results for:
        <span style={{ color: '#ff0000' }}> {searchTerm}</span>
      </Title>

      <Videos videos={searchVideos} />
    </>
  )
}
