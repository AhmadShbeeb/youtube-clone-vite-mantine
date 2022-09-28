import { Navbar as ShellNavbar, MediaQuery, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconHome } from '@tabler/icons'
import { useState, useEffect } from 'react'
import { NavbarLink } from '.'
import { categories } from '../../utils/constants'

export const Navbar = ({ opened, setOpened }) => {
  const minWidth = 200
  const matches = useMediaQuery(`(min-width: ${minWidth}px)`)
  const [active, setActive] = useState('New')

  useEffect(() => {
    opened ? setOpened(o => !o) : null
  }, [matches])

  return (
    opened && (
      <ShellNavbar
        // hiddenBreakpoint='sm'
        // hidden={!opened}
        // height={600}
        p='xs'
        width={{ base: minWidth }}
        sx={{ zIndex: '1' }}
      >
        {/* Grow section will take all available space that is not taken by first and last sections */}
        <ShellNavbar.Section
          grow
          mt='md'
          component={ScrollArea}
          mx='-xs'
          px='xs'
          type='hover'
        >
          {categories.map(category => (
            <NavbarLink
              {...category}
              key={category.label}
              active={active}
              setActive={setActive}
            />
          ))}
        </ShellNavbar.Section>

        <ShellNavbar.Section>Ahmad Shbeeb</ShellNavbar.Section>
      </ShellNavbar>
    )
  )
}
