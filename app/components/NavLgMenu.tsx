import { Button, createStyles, Divider, Menu, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { IconArrowsLeftRight, IconBookDownload, IconBrandDiscord, IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandMastodon, IconBriefcase, IconExternalLink } from '@tabler/icons'
import React from 'react'
import CopyDiscord from './buttons/CopyDiscord'
import CopyEmail from './buttons/CopyEmail'

type Props = {}
const useStyles = createStyles((theme) => ({
    link: {
      width: '4rem',
      height: '4rem',
      borderRadius: theme.radius.md,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
      opacity: 0.85,
        
  
      '&:hover': {
        opacity: 1,
        backgroundColor: theme.colors.purple[5],
      },
    }
}));

function NavLgMenu({}: Props) {
    const theme = useMantineTheme()
    const {classes, cx} = useStyles()
  return (
    <Menu position="right-start" trigger="hover" openDelay={100} closeDelay={500} closeOnEscape closeOnItemClick={false} shadow="md" width={200}>
    <Menu.Target>
      <UnstyledButton
      className={cx(classes.link)}

      
      sx={{
        width: '4rem',
        height: '4rem',
        borderRadius: theme.radius.md,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.85,
        
      }}>
        
        <IconExternalLink size={30} stroke={1.5}/>
        <Text>
More
        </Text>
        </UnstyledButton>
 
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Label>Social</Menu.Label>
      <Menu.Item icon={<IconBrandGithub size={14} aria-label="Jordan's Github" />}>Github</Menu.Item>
      <Menu.Item icon={<IconBrandLinkedin size={14}  aria-label="Jordan's LinkedIn"/>}>LinkedIn</Menu.Item>
      <Menu.Item icon={<IconBrandDiscord size={14}  aria-label=""/>}>Mastodon</Menu.Item>

      <Menu.Divider />
      <Menu.Label>Resources</Menu.Label>

      <Menu.Item component='a' style={{
        textDecoration: "none"}} download href="/docs/WalshResume.pdf " icon={<IconBookDownload size={14}  aria-label="Jordan's Resume"/>}>Resume</Menu.Item>
      <Menu.Item component='a' style={{
        textDecoration: "none"}} download href="/docs/WalshCVKit.pdf " icon={<IconBriefcase size={14}  aria-label="Jordan's Resume and other resources"/>}>Doc Kit</Menu.Item>
  <Menu.Divider/>
      <Menu.Item sx={{
        alignItems: 'start',
        justifyContent: 'start',
      }} aria-label="Copy email address to clipboard"
      >
        <CopyEmail/>
      </Menu.Item>
      <Menu.Item aria-label="Copy discord tag to clipboard"
      >
        <CopyDiscord/>
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
  )
}

export default NavLgMenu