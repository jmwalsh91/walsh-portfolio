import { Button, useMantineTheme } from '@mantine/core'
import React from 'react'

type Props = {
    icon: Element,
    label: string,
    url: string,

}

function ExternalLinkButton({icon, label, url}: Props) {
    const theme = useMantineTheme()
  return (
    <Button component='a' href={url} size={'xl'} sx={{
        textDecoration: 'none',
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
      opacity: 0.85,
      padding: ".5rem"
      }}>
        {icon}
        {label}
        </Button>
  )
}

export default ExternalLinkButton