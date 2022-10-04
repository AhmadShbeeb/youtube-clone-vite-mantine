import { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { Videos } from '.'
import ReactPlayer from 'react-player'
import { AspectRatio, SimpleGrid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

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
      await fetchFromAPI(`video/related-contents/?id=${videoId}`, signal)
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
      cols={2}
      spacing='md'
      breakpoints={[
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        // { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
      {/* <AspectRatio ratio={16 / 9}> */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
      />
      <Videos videos={relatedVideos} />
      {/* </AspectRatio> */}
    </SimpleGrid>
  )
}
