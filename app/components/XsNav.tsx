import { Anchor, Button, Container, Divider, Drawer, Footer, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import { Link } from '@remix-run/react'
import { IconBookDownload, IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandMastodon, IconBriefcase, IconMailOpened } from '@tabler/icons'
import React from 'react'
import CopyEmail from './buttons/CopyEmail'
import ExternalLinkButton from './buttons/ExternalLink'
import Nav from './Nav'

type Props = {
 opened: boolean,
 setOpened: React.Dispatch<React.SetStateAction<boolean>>
}
const buttonStyles = `
textDecoration: 'none',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,
    padding: ".5rem"
    `
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



    <Button component='a' href="https://github.com/jmwalsh91" target="_blank" rel="noopener noreferrer" variant="outline" size={'xl'} sx={{
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
      <Button component='a' href="https://github.com/jmwalsh91" variant="outline" size={'xl'} >
      <IconBrandGithub/>
      Resume</Button>
      <ExternalLinkButton icon={IconBrandGithub} label="Github" url="https://github.com/jmwalsh91" />
    <Text size={'xl'}>
      Resume</Text>

  
    <Text size={'xl'}>Resume</Text>
</Container>
 
    <Container>
    <Text>Social</Text>
      <Button variant="subtle" size="lg" component='a' href="https://github.com/jmwalsh91" target="_blank" rel="noopener noreferrer"><IconBrandGithub size={20} /> Github</Button>
      <Button variant="subtle" size="lg"><IconBrandLinkedin size={20} /> LinkedIn</Button>
      <Button variant="subtle" size="lg"><IconBrandMastodon size={20} /> Mastodon</Button>
      <Button
      >
      <IconBrandGmail size={20} />
        <CopyEmail/>
      </Button>

      <Divider />
      <Text>Resources</Text>

      <Button variant="subtle" size="lg"><IconBookDownload size={20} /> Resume</Button>
      <Button variant="subtle" size="lg"><IconBriefcase size={20} /> Doc Kit</Button>
  
    </Container>
        </Stack>
  </Drawer>
  <Group position="center">
  </Group>
</>
  )
}

export default XsNav