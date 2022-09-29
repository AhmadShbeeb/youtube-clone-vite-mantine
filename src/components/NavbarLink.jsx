import { NavLink } from '@mantine/core'

export const NavbarLink = ({
  label,
  icon,
  selectedCategory,
  setSelectedCategory,
  setOpened,
}) => {
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
      color='red'
      variant='subtle'
      active={label === selectedCategory}
      onClick={() => {
        setSelectedCategory(label)
        setOpened(false)
      }}
      label={label}
      icon={
        <div style={{ width: categoryIconSize, height: categoryIconSize }}>
          {icon}
        </div>
      }
      sx={theme => ({
        '&:hover': {
          backgroundColor:
            // theme.colorScheme == 'dark' ? theme.black : theme.colors.gray[2],
            theme.colorScheme == 'dark'
              ? theme.colors.red[9]
              : theme.colors.red[1],
        },
        '&[data-active]': {
          // backgroundColor: theme.colors.blue[3],
          color:
            theme.colorScheme == 'dark'
              ? theme.colors.red[6]
              : theme.colors.red[6],
        },
      })}
    />
  )
}
