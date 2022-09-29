import { AppShell, MediaQuery, Burger, Image, Title } from '@mantine/core'
import { useState, useEffect } from 'react'
import { Header, Navbar } from '.'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { Videos } from '.'

import { apiTest } from '../../utils/constants'

export const HomePage = () => {
  const [opened, setOpened] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(apiTest)
  console.log(videos)

  //   useEffect(() => {
  //     // setVideos(null)
  // ]
  //     // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data =>
  //     //   setVideos(data.items)
  //     // )
  //     // console.log(videos)
  //   }, [selectedCategory])

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={
        <Navbar
          opened={opened}
          setOpened={setOpened}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      }
    >
      <Title order={3} color='dimmed' italic mb={12}>
        {selectedCategory}
        <span style={{ color: '#ff0000' }}> videos</span>
      </Title>

      <Videos videos={videos} />
    </AppShell>
  )
}
