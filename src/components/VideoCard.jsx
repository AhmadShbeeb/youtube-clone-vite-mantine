import { Tooltip } from '@mantine/core'
import { Card, Image, Group, Text, Spoiler, Stack } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { useResizeObserver } from '@mantine/hooks'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      shadow='md'
      p='xs'
      radius='md'
      withBorder
      sx={{ height: 300, maxWidth: 320, minWidth: 20 }}
    >
      <Card.Section component={Link} to={`/video/${videoId}`}>
        <Image
          src={`${snippet?.thumbnails?.high?.url}`}
          height={180}
          width={320}
          // fit='contain'
          alt='Loading...'
          withPlaceholder
        />
      </Card.Section>

      <Stack align='flex-start' spacing='lg' style={{ position: 'relative' }}>
        <Tooltip multiline label={`${snippet?.title} `}>
          <Text
            size='md'
            mt='xs'
            weight={600}
            component={Link}
            lineClamp={2}
            to={`/video/${videoId}`}
          >
            {`${snippet?.title} `}
          </Text>
        </Tooltip>

        <Text
          size='sm'
          color='dimmed'
          component={Link}
          to={`/channel/${snippet?.channelId}`}
          style={{ position: 'absolute', top: '80px' }}
        >
          {`${snippet?.channelTitle}`}
        </Text>
      </Stack>
    </Card>
  )
}
