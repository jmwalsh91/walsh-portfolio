import { Button, CopyButton } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'

import React from 'react'

type Props = {}

function CopyEmail({}: Props) {
    const clipboard = useClipboard({timeout: 500})
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={() => clipboard.copy('jordan@jmwalsh.dev')}>
          {copied ? 'Copied email' : 'Copy email'}
        </Button>
      )}
    </CopyButton>
  )
}

export default CopyEmail