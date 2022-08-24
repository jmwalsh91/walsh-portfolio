import { Button, CopyButton, useMantineTheme } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'

import React from 'react'
import {IconBrandDiscord, IconBrandGmail, IconClipboardCheck, IconClipboardCopy} from '@tabler/icons'
import { theme } from '~/styles/theme'
type Props = {}

function CopyDiscord({}: Props) {
    const theme = useMantineTheme()
    const clipboard = useClipboard({timeout: 1000})
  return (
    <CopyButton value="jmwalsh#1812">
      {({ copied, copy }) => (
        <Button variant="subtle" color={copied ? theme.colors.success[5] : theme.colors.primary[5]} onClick={copy}>
            
          {copied ?<IconClipboardCheck size={20}/> : <IconBrandDiscord size={20}/>}
          {copied ? 'Copied Discord Id' : 'Copy Discord Id'}
        </Button>
      )}
    </CopyButton>
  )
}

export default CopyDiscord