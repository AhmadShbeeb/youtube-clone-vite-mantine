import {
  Navbar as ShellNavbar,
  MediaQuery,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconHome } from '@tabler/icons'
import { IconGitPullRequest } from '@tabler/icons'
import { useEffect } from 'react'

export const Navbar = ({ opened, setOpened }) => {
  const minWidth = 250
  const iconSize = 25
  const matches = useMediaQuery(`(min-width: ${minWidth}px)`)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

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
        width={{ sm: minWidth, lg: 500, base: minWidth }}
        sx={{ zIndex: '1' }}
      >
        {/* Grow section will take all available space that is not taken by first and last sections */}
        <ShellNavbar.Section grow mt='md'>
          <UnstyledButton
            sx={theme => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme == 'dark' ? theme.white : theme.black,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme == 'dark'
                    ? theme.black
                    : theme.colors.gray[2],
              },
            })}
          >
            <Group>
              <IconHome size={iconSize} color={dark ? 'white' : 'black'} />
              <Text size='md' weight={400}>
                Home
              </Text>
            </Group>
          </UnstyledButton>
        </ShellNavbar.Section>

        <ShellNavbar.Section>Ahmad Shbeeb</ShellNavbar.Section>
      </ShellNavbar>
    )
  )
}
