import { Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useOutletContext, useParams } from 'react-router-dom'
import { Videos } from '.'

export const SearchFeed = () => {
  const { videos } = useOutletContext()
  const { searchTerm } = useParams()

  const searchVideos = useQuery(
    ['searchVideos'],
    async ({ signal }) => await fetchFromAPI(`search/?q=${searchTerm}`, signal)
  )

  return (
    <>
      <Title order={3} color='dimmed' italic mb={12}>
        Search Results for: {searchTerm}
        <span style={{ color: '#ff0000' }}> Videos</span>
      </Title>

      <Videos videos={searchVideos} />
    </>
  )
}
