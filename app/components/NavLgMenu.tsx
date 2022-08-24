import { Button, createStyles, Menu, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { IconArrowsLeftRight, IconBookDownload, IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandMastodon, IconBriefcase, IconExternalLink } from '@tabler/icons'
import React from 'react'
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
      <Menu.Item icon={<IconBrandGithub size={14} />}>Github</Menu.Item>
      <Menu.Item icon={<IconBrandLinkedin size={14} />}>LinkedIn</Menu.Item>
      <Menu.Item icon={<IconBrandMastodon size={14} />}>Mastodon</Menu.Item>

      <Menu.Divider />
      <Menu.Label>Resources</Menu.Label>

      <Menu.Item icon={<IconBookDownload size={14} />}>Resume</Menu.Item>
      <Menu.Item icon={<IconBriefcase size={14} />}>Doc Kit</Menu.Item>
  
      <Menu.Item
      >
        <CopyEmail/>
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
  )
}

export default NavLgMenu