import { Button, CopyButton, useMantineTheme } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'

import React from 'react'
import {IconBrandGmail, IconClipboardCheck, IconClipboardCopy} from '@tabler/icons'
import { theme } from '~/styles/theme'
type Props = {}

function CopyEmail({}: Props) {
    const theme = useMantineTheme()
    const clipboard = useClipboard({timeout: 1000})
  return (
    <CopyButton value="jordan@jmwalsh.dev">
      {({ copied, copy }) => (
        <Button variant="subtle" color={copied ? theme.colors.success[2] : theme.colors.primary[5]} onClick={copy}>
            
          {copied ?<IconClipboardCheck size={20}/> : <IconClipboardCopy size={20}/>}
          {copied ? 'Copied Email!' : 'Copy Email'}
        </Button>
      )}
    </CopyButton>
  )
}

export default CopyEmail