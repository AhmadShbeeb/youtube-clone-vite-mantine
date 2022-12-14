import { BackgroundImage, Avatar, Text, Skeleton, Center } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import { fetchData } from '../../utils/fetchFromAPI'

export const ChannelDetails = () => {
  const { channelId } = useParams()
  const formatNumber = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 3,
  })

  const channelVideos = useQuery(
    ['channelVideos', channelId],
    async ({ signal }) =>
      await fetchData(`search?part=id,snippet&channelId=${channelId}`, signal)
  )
  const { data: channleDetails, isFetching } = useQuery(
    ['channleDetails', channelId],
    async ({ signal }) => {
      const data = await fetchData(
        `channels?part=snippet,statistics&id=${channelId}`,
        signal
      )
      return data[0]
    }
  )

  return (
    <>
      <Skeleton visible={isFetching} mb={10}>
        <BackgroundImage
          src={channleDetails?.brandingSettings?.image?.bannerExternalUrl}
          radius='md'
        >
          <Center p='2vh' sx={{ flexDirection: 'column' }}>
            <Avatar
              src={channleDetails?.snippet?.thumbnails?.medium?.url}
              radius='xl'
              size='xl'
            />
            <Text
              weight={600}
              size='md'
              color='dimmed'
              sx={{ backgroundColor: 'rgba(0, 0, 0, 0.74)' }}
            >
              {channleDetails?.snippet?.title}
            </Text>
            <Text
              weight={600}
              size='md'
              color='dimmed'
              sx={{ backgroundColor: 'rgba(0, 0, 0, 0.74)' }}
            >
              {formatNumber.format(channleDetails?.statistics?.subscriberCount)}{' '}
              subscribers
            </Text>
          </Center>
        </BackgroundImage>
      </Skeleton>
      <Videos videos={channelVideos} />
    </>
  )
}
