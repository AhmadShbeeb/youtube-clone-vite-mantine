import { Box } from '@mantine/core'
import { UnstyledButton, Group, Text } from '@mantine/core'
import { IconHome } from '@tabler/icons'

export const NavbarLink = ({ label, icon }) => {
  const categoryIconSize = '24px'
  return (
    <UnstyledButton
      sx={theme => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme == 'dark' ? theme.white : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme == 'dark' ? theme.black : theme.colors.gray[2],
        },
      })}
    >
      <Group>
        <div style={{ width: categoryIconSize, height: categoryIconSize }}>
          {icon}
        </div>
        <Text size='md' weight={400}>
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  )
}
