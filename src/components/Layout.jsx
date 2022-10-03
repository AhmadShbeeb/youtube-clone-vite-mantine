import { AppShell, MediaQuery, Burger, Image, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Videos, Header, Navbar } from '.'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

// import { apiTest } from '../../utils/constants'

export const Layout = () => {
  const [opened, setOpened] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('New')
  // const [videos, setVideos] = useState(null)
  const [triggerRefetch, setTriggerRefetch] = useState(false)
  // const [videos, setVideos] = useState(apiTest)
  // console.log(videos)

  // const { data, isLoading, error, refetch } = useQuery(
  const videos = useQuery(['videos'], async ({ signal }) => {
    const data = await fetchFromAPI(`search/?q=${selectedCategory}`, signal)
    const uniqueVideos = [
      ...new Map(data.contents.map(v => [v.video.videoId, v])).values(),
    ]
    return uniqueVideos
  })
  console.log(videos)

  // useEffect(() => {
  //   setVideos(null)
  //   // fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data =>
  //   // setVideos(data.items)
  //   // )
  // }, [selectedCategory, triggerRefetch])

  return (
    <AppShell
      padding='md'
      header={
        <Header
          opened={opened}
          setOpened={setOpened}
          setVideos={setVideos}
          setTriggerRefetch={setTriggerRefetch}
        />
      }
      navbar={
        <Navbar
          opened={opened}
          setOpened={setOpened}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setVideos={setVideos}
        />
      }
    >
      <Outlet context={{ selectedCategory, videos, setVideos }} />
    </AppShell>
  )
}
