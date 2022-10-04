import { AppShell } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Videos, Header, Navbar } from '.'
import { fetchFromAPI } from '../../utils/fetchFromAPI'

export const Layout = () => {
  const [opened, setOpened] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('New')

  const videos = useQuery(
    ['videos', selectedCategory],
    async ({ signal }) =>
      await fetchFromAPI(`search/?q=${selectedCategory}`, signal)
  )

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
      <Outlet
        context={{
          selectedCategory,
          videos,
        }}
      />
    </AppShell>
  )
}
