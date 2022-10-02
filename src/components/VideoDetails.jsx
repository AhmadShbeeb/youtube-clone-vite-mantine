import { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { Videos } from '.'
import ReactPlayer from 'react-player'
import { AspectRatio } from '@mantine/core'

export const VideoDetails = () => {
  const { videoId } = useParams()
  const { videos, setVideos } = useOutletContext()
  const [videoDetails, setVideoDetails] = useState(null)

  useEffect(() => {
    // setVideos(null)
    setVideoDetails(null)
    fetchFromAPI(
      `videos?part=contentDetails,snippet,statistics&id=${videoId}`
    ).then(data => setVideoDetails(data.items[0]))

    console.log(videoDetails)
  }, [])

  return (
    <div>
      {/* <Videos /> */}
      {/* <AspectRatio ratio={16 / 9}> */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
      />
      {/* </AspectRatio> */}
    </div>
  )
}
