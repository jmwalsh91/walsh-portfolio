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
    <Button component='a' href={url} size={'xl'} variant="outline"  sx={{
        textDecoration: 'none',
        
      opacity: 0.85,
      padding: ".5rem",

      background: theme.primaryColor
 
      }}>
        {icon}
        {label}
        </Button>
  )
}

export default ExternalLinkButton