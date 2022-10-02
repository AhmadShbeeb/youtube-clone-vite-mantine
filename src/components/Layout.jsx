import { AppShell, MediaQuery, Burger, Image, Title } from '@mantine/core'
import { useState, useEffect, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Videos, Header, Navbar } from '.'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

// import { apiTest } from '../../utils/constants'

export const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  // const [videos, setVideos] = useState(apiTest)
  // console.log(videos)

  useEffect(() => {
    setVideos(null)
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data =>
      setVideos(data.items)
    )
  }, [selectedCategory])

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
          setVideos={setVideos}
        />
      }
    >
      <Outlet context={{ selectedCategory, videos }} />
    </AppShell>
  )
}
