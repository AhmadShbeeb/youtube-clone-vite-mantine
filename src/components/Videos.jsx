import { SimpleGrid, Loader } from '@mantine/core'
import { VideoCard } from '.'
import { memo } from 'react'
import { useMatch } from 'react-router-dom'

export const Videos = memo(({ videos }) => {
  const match = useMatch('/video/:videoId')
  const isVideoPage = match ? true : false

  if (!videos?.length)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center', //align vertical
          justifyContent: 'center', //align horizontal
        }}
      >
        <Loader color='red' variant='bars' size='xl' />
      </div>
    )

  return (
    <SimpleGrid
      cols={isVideoPage ? 1 : 4}
      spacing='md'
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      {videos?.map(
        (video, idx) =>
          video.id.videoId && <VideoCard key={video.id.videoId} video={video} />
      )}
    </SimpleGrid>
  )
})
