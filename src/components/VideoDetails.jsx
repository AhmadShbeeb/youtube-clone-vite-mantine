import { useParams } from 'react-router-dom'

export const VideoDetails = () => {
  const { videoId } = useParams()

  return <div> {videoId}</div>
}
