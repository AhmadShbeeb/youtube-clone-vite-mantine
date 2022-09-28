import { AppShell, MediaQuery, Burger, Image } from '@mantine/core'
import { useState } from 'react'
import { Header, Navbar } from '.'

export const HomePage = () => {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} setOpened={setOpened} />}
    >
      <p>Videos</p>
    </AppShell>
  )
}
