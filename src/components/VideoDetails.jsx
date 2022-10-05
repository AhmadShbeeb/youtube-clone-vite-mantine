import { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { fetchData } from '../../utils/fetchFromAPI'
import { Videos } from '.'
import ReactPlayer from 'react-player'
import { AspectRatio, SimpleGrid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mantine/core'
import { ScrollArea } from '@mantine/core'
import { Paper } from '@mantine/core'
import { Skeleton } from '@mantine/core'

export const VideoDetails = () => {
  const { videoId } = useParams()
  // const {
  //   // videos,
  //   // setVideos
  // } = useOutletContext()
  const [videoDetails, setVideoDetails] = useState(null)

  const relatedVideos = useQuery(
    ['relatedVideos', videoId],
    async ({ signal }) =>
      await fetchData(
        `search?part=id,snippet&type=video&relatedToVideoId=${videoId}`,
        signal
      )
  )

  // useEffect(() => {
  //   // relatedVideos?.refetch()
  //   console.log('refetch')
  //   //   // setVideos(null)
  //   //   // setVideoDetails(null)

  //   //   // fetchFromAPI(`video/details/?id=${videoId}`).then(data =>
  //   //   //   setVideoDetails(data)
  //   //   // )
  //   //   // fetchFromAPI(`video/related-contents/?id=${videoId}`).then(data => {
  //   //   //   const uniqueVideos = [
  //   //   //     ...new Map(data.contents.map(v => [v?.video?.videoId, v])).values(),
  //   //   //   ]
  //   //   //   // setVideos(uniqueVideos)
  //   //   // })

  //   //   // console.log(videoDetails)
  // }, [videoId])

  return (
    <SimpleGrid
      cols={4}
      spacing='md'
      breakpoints={[{ maxWidth: 'lg', cols: 1, spacing: 'sm' }]}
    >
      <Box sx={{ gridColumn: '1/4' }}>
        {/* <Skeleton visible={loading}> */}
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width='900px'
          height='480px'
        />
        {/* </Skeleton> */}
      </Box>

      <Paper
        shadow='xl'
        radius='lg'
        p='xs'
        withBorder
        component={ScrollArea}
        scrollHideDelay={500}
        sx={{
          maxWidth: '25vw',
          height: '80vh',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Videos videos={relatedVideos} />
      </Paper>
    </SimpleGrid>
  )
}
