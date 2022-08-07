import { Button, Drawer, Group, Text } from '@mantine/core'
import { IconMailOpened } from '@tabler/icons'
import React from 'react'

type Props = {
 opened: boolean,
 setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

function XsNav({opened, setOpened}: Props) {
  return (
    <>
    <Drawer
    opened={opened}
    onClose={() => setOpened(false)}
    title="Register"
    padding="xl"
    size="xl"
  >
    <Text>Hello</Text>
    <Text>Hi</Text>
    <Text>Hola</Text>
  </Drawer>

  <Group position="center">
    <Button onClick={() => setOpened(true)}>Open Drawer</Button>
  </Group>
</>
  )
}

export default XsNav