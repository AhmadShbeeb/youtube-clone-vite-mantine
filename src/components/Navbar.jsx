import { Navbar as ShellNavbar } from '@mantine/core'

export const Navbar = ({ opened }) => {
  return (
    // opened && (
    <ShellNavbar
      hiddenBreakpoint='sm'
      hidden={!opened}
      height={500}
      p='xs'
      width={{ sm: 300, lg: 400, base: 300 }}
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
    // )
  )
}
