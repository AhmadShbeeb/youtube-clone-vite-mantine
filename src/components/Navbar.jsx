import { Navbar as ShellNavbar, MediaQuery } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect } from 'react'

export const Navbar = ({ opened, setOpened }) => {
  const matches = useMediaQuery('(min-width: 300px)')

  useEffect(() => {
    opened ? setOpened(o => !o) : null
  }, [matches])

  return (
    opened && (
      <ShellNavbar
        // hiddenBreakpoint='sm'
        // hidden={!opened}
        height={500}
        p='xs'
        width={{ sm: 300, lg: 400, base: 300 }}
        sx={{ zIndex: '1' }}
      >
        <ShellNavbar.Section>
          {/* Header with logo */}
          First section
        </ShellNavbar.Section>
        <ShellNavbar.Section grow mt='md'>
          {/* Links sections */}
          Link 1
        </ShellNavbar.Section>
        <ShellNavbar.Section>
          {/* Footer with user */}
          Last section
        </ShellNavbar.Section>
      </ShellNavbar>
    )
  )
}
