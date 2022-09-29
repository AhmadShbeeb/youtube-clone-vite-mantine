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
      // m={40}
      radius='md'
      withBorder
      sx={{ height: 300, maxWidth: 320, minWidth: 20 }}
      // sx={{ xs: '100%', sm: '358px', md: '320px' }}
      // sx={
      // {
      // width: '320px',
      // height: '300px',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      //   }
      // }
    >
      <Card.Section
        component={Link}
        to={`/video/${videoId}`}
        // inheritPadding
        // sx={
        // {
        // width: { md: '320px' },
        //   display: 'flex',
        //   alignItems: 'start',
        //   justifyContent: 'flex-start',
        // }
        // }
        // sx={{ maxHeight: '100' }}
      >
        <Image
          src={`${snippet?.thumbnails?.high?.url}`}
          height={180}
          width={320}
          // fit='contain'
          alt='Loading...'
          withPlaceholder
        />
      </Card.Section>

      <Stack align='flex-start' spacing='lg'>
        <Spoiler mt='sm' maxHeight={30} showLabel='...'>
          <Tooltip multiline label={`${snippet?.title} `}>
            <Text
              size='md'
              weight={600}
              component={Link}
              to={`/video/${videoId}`}
            >
              {`${snippet?.title} `}
            </Text>
          </Tooltip>
        </Spoiler>

        <Text
          size='sm'
          color='dimmed'
          component={Link}
          to={`/channel/${snippet?.channelId}`}
          // mb={20}
          sx={{ bottom: '10px' }}
        >
          {`${snippet?.channelTitle}`}
        </Text>
      </Stack>
    </Card>
  )
}
