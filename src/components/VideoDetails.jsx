import { useEffect, useState } from 'react'
import { useParams, useOutletContext, Link } from 'react-router-dom'
import { fetchData } from '../../utils/fetchFromAPI'
import { Videos } from '.'
import ReactPlayer from 'react-player'
import { useQuery } from '@tanstack/react-query'
import {
  AspectRatio,
  SimpleGrid,
  Paper,
  Box,
  ScrollArea,
  Skeleton,
  Text,
} from '@mantine/core'

export const VideoDetails = () => {
  const { videoId } = useParams()
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  })

  const relatedVideos = useQuery(
    ['relatedVideos', videoId],
    async ({ signal }) =>
      await fetchData(
        `search?part=id,snippet&type=video&relatedToVideoId=${videoId}`,
        signal
      )
  )

  const { data: videoDetails, isFetching } = useQuery(
    ['videoDetails', videoId],
    async ({ signal }) => {
      const data = await fetchData(
        `videos?part=contentDetails,snippet,statistics&id=${videoId}`,
        signal
      )
      return data[0]
    }
  )

  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <SimpleGrid
      cols={4}
      spacing='md'
      breakpoints={[{ maxWidth: 'lg', cols: 1, spacing: 'sm' }]}
    >
      <Box sx={{ gridColumn: '1/4' }}>
        <Skeleton circle visible={isFetching}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            // width='900px'
            width='100%'
            height='450px'
          />
        </Skeleton>
        <Skeleton radius='md' height={76} visible={isFetching} mt={4}>
          <Text weight={700} size='lg'>
            {videoDetails?.snippet?.title}
          </Text>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '10px',
              // paddingBlock: '0px',
            }}
          >
            <Text weight={500} size='md' color='dimmed'>
              {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()}{' '}
              views
            </Text>
            <Text
              weight={500}
              size='md'
              color='dimmed'
              // style={{ flex: '1 0 auto' }}
            >
              {formatDate(videoDetails?.snippet?.publishedAt)}
            </Text>

            <Text
              weight={500}
              size='md'
              color='dimmed'
              style={{ marginLeft: 'auto' }}
            >
              {formatter.format(videoDetails?.statistics?.likeCount)} likes
            </Text>
          </div>
          <Text
            weight={500}
            size='md'
            component={Link}
            to={`/channel/${videoDetails?.snippet?.channelId}`}
          >
            {videoDetails?.snippet?.channelTitle}
          </Text>
        </Skeleton>
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
          height: '82vh',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Videos videos={relatedVideos} />
      </Paper>
    </SimpleGrid>
  )
}
