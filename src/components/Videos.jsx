import { Grid, Loader } from '@mantine/core'
import { VideoCard } from '.'

export const Videos = ({ videos }) => {
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
    <Grid justify='flex-start' align='stretch' columns={12}>
      {videos?.map(
        (video, idx) =>
          video.id.videoId && (
            <Grid.Col key={idx} xs={4} lg={3}>
              <VideoCard key={video.id.videoId} video={video} />
            </Grid.Col>
          )
      )}
    </Grid>
  )
}
