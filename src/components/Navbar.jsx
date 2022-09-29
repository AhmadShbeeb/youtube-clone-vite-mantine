import {
  Navbar as ShellNavbar,
  MediaQuery,
  ScrollArea,
  Code,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconHome } from '@tabler/icons'
import { useEffect } from 'react'
import { NavbarLink } from '.'
import { categories } from '../../utils/constants'

export const Navbar = ({
  opened,
  setOpened,
  selectedCategory,
  setSelectedCategory,
}) => {
  const minWidth = 200
  const openedWidth = 450
  const matches = useMediaQuery(`(min-width: ${openedWidth}px)`)

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
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </ShellNavbar.Section>

        <ShellNavbar.Section>
          <Code color='red' sx={{ fontSize: '10px' }}>
            Copyright &copy; 2022 Ahmad Shbeeb
          </Code>
        </ShellNavbar.Section>
      </ShellNavbar>
    )
  )
}
