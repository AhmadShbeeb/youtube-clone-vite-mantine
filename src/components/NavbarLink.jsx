import { NavLink } from '@mantine/core'
import { Box } from '@mantine/core'
import { UnstyledButton, Group, Text } from '@mantine/core'
import { IconHome } from '@tabler/icons'
import { Link } from 'react-router-dom'

export const NavbarLink = ({ label, icon, setActive, active }) => {
  const categoryIconSize = '24px'

  return (
    // <UnstyledButton
    //   onClick={() => setActive(o => !o)}
    //   active={active}
    //   sx={theme => ({
    //     display: 'block',
    //     width: '100%',
    //     padding: theme.spacing.xs,
    //     borderRadius: theme.radius.sm,
    //     color: theme.colorScheme == 'dark' ? theme.white : theme.black,
    //     '&:hover': {
    //       backgroundColor:
    //         theme.colorScheme == 'dark' ? theme.black : theme.colors.gray[2],
    //     },
    //   })}
    // >
    //   <Group>
    //     <div style={{ width: categoryIconSize, height: categoryIconSize }}>
    //       {icon}
    //     </div>
    //     <Text size='md' weight={400}>
    //       {label}
    //     </Text>
    //   </Group>
    // </UnstyledButton>

    <NavLink
      // description={item.description}
      // rightSection={item.rightSection}
      active={label === active}
      label={label}
      icon={
        <div style={{ width: categoryIconSize, height: categoryIconSize }}>
          {icon}
        </div>
      }
      onClick={() => setActive(label)}
      color='red'
      variant='subtle'
      sx={theme => ({
        color: theme.colorScheme == 'dark' ? theme.white : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme == 'dark' ? theme.black : theme.colors.gray[2],
        },
      })}
    />
  )
}
