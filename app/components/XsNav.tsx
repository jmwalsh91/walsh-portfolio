import { Button, Container, Drawer, Footer, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { Link } from '@remix-run/react'
import { IconBrandGithub, IconMailOpened } from '@tabler/icons'
import React from 'react'
import ExternalLinkButton from './buttons/ExternalLink'
import Nav from './Nav'

type Props = {
 opened: boolean,
 setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

function XsNav({opened, setOpened}: Props) {
  const theme = useMantineTheme()
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



    <Button component='a' href="https://github.com/jmwalsh91" variant="outline" size={'xl'} sx={{
      textDecoration: 'none',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,
    padding: ".5rem"
    }}>
      <IconBrandGithub/>
      GitHub</Button>
      <Button component='a' href="https://github.com/jmwalsh91" variant="outline" size={'xl'} sx={{
      textDecoration: 'none',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,
    padding: ".5rem"
    }}>
      <IconBrandGithub/>
      LinkedIn</Button>
      <Button component='a' href="https://github.com/jmwalsh91" variant="outline" size={'xl'} sx={{
      textDecoration: 'none',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,
    padding: ".5rem"
    }}>
      <IconBrandGithub/>
      Resume</Button>
      <ExternalLinkButton icon={IconBrandGithub} label="Github" url="https://github.com/jmwalsh91" />
    <Text size={'xl'}>
      Resume</Text>

  
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