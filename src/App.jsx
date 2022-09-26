import { AppShell, MediaQuery, Burger, Image } from '@mantine/core'
import { useState } from 'react'
import { Header, Navbar } from './components'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} />}
    ></AppShell>
  )
}

export default App
