import { Title } from '@mantine/core'
import { useOutletContext } from 'react-router-dom'
import { Videos } from '.'

export const Feed = () => {
  const { selectedCategory, videos } = useOutletContext()
  return (
    <>
      <Title order={3} color='dimmed' italic mb={12}>
        {selectedCategory}
        <span style={{ color: '#ff0000' }}> Videos</span>
      </Title>

      <Videos videos={videos} />
    </>
  )
}
