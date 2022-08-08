import { Button, Container, Drawer, Footer, Group, Stack, Text } from '@mantine/core'
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
    aria-label="Navigation Dialog"
    closeButtonLabel="Close Dialog"
    opened={opened}
    onClose={() => setOpened(false)}
    title="Navigation"
    padding="xl"
    size="xs"
  >
    <Stack justify="space-around" sx={{
        height: "100vh"
    }}>
 
<Container>
    <Text size={'xl'}>Github</Text>
    <Text size={'xl'}>LinkedIn</Text>
    <Text size={'xl'}>Resume</Text>
</Container>
 
    <Container>
        hello
    </Container>
        </Stack>
  </Drawer>
  <Group position="center">
  </Group>
</>
  )
}

export default XsNav