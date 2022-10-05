import { Card, Image, Text, Tooltip, AspectRatio, Stack } from '@mantine/core'
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
      sx={{ height: 300, maxWidth: 320 }}
    >
      <Card.Section component={Link} to={`/video/${videoId}`}>
        <AspectRatio
          ratio={320 / 180}
          // sx={{ maxWidth: 320, maxHeight: 180 }}
          // mx='auto'
          // my='auto'
        >
          <Image
            src={`${snippet?.thumbnails?.medium?.url}`}
            // fit='scale-down'
            // alt='Loading...'
            withPlaceholder
          />
        </AspectRatio>
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
