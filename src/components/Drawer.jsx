import { useState } from 'react'
import { Drawer as CoreDrawer } from '@mantine/core'
import { categories } from '../../utils/constants'
import { NavbarLink } from '.'
import { Code } from '@mantine/core'
import { Stack } from '@mantine/core'
import { ScrollArea } from '@mantine/core'

export const Drawer = ({
  opened,
  setOpened,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <CoreDrawer
      opened={opened}
      onClose={() => setOpened(false)}
      title='Categories :'
      padding='5px'
      size='xs'
    >
      <Stack align='start' spacing='xs' style={{ position: 'relative' }}>
        {categories.map(category => (
          <NavbarLink
            {...category}
            key={category.label}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setOpened={setOpened}
          />
        ))}

        <Code
          color='red'
          sx={{ position: 'absolute', top: '103%', fontSize: '10px' }}
        >
          Copyright &copy; 2022 Ahmad Shbeeb
        </Code>
      </Stack>
    </CoreDrawer>
  )
}
