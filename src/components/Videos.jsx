import { SimpleGrid, Loader } from '@mantine/core'
import { VideoCard } from '.'
import { memo } from 'react'
import { useMatch } from 'react-router-dom'

export const Videos = memo(({ videos }) => {
  // console.log(videos)

  const match = useMatch('/video/:videoId')
  const isVideoPage = match ? true : false

  // if (videos?.isLoading || videos?.isFetching || videos?.isRefetching)
  // if (!videos?.data?.length)
  if (videos?.isFetching)
    return (
      <div
        style={{
          // display: 'flex',
          // alignItems: 'center', //align vertical
          // justifyContent: 'center', //align horizontal
          // minHeight: '100%',
          // minWidth: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Loader color='red' variant='bars' size='xl' />
      </div>
    )

  return (
    <SimpleGrid
      cols={isVideoPage ? 1 : 4}
      // sx={isVideoPage && { justifySelf: 'end' }}
      spacing='md'
      breakpoints={
        !isVideoPage
          ? [
              { maxWidth: 'md', cols: 3, spacing: 'md' },
              { maxWidth: 'sm', cols: 2, spacing: 'sm' },
              { maxWidth: 'xs', cols: 1, spacing: 'sm' },
            ]
          : []
      }
    >
      {videos?.data?.map(
        video =>
          // video.id.videoId && <VideoCard key={video.id.videoId} video={video} />
          video?.id?.videoId && (
            <VideoCard key={video.id.videoId} video={video} />
          )
      )}
    </SimpleGrid>
  )
})
