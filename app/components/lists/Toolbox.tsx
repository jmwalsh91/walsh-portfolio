import { Badge, Group, Stack, Title } from '@mantine/core'
import React from 'react'

type Props = {}

function Toolbox({}: Props) {
  return (
    <div>
        <Title>Toolbox</Title>
        <Stack>
       
        <Group>
            <Stack>
                <Badge>hello</Badge>
                <Badge>hello</Badge>
                <Badge>hello</Badge>
                <Badge>hello</Badge>
                <Badge>hello</Badge>

            </Stack>
        </Group>
        <Group>
            <Stack>
                <Badge>hi</Badge>
                <Badge>hi</Badge>
                <Badge>hi</Badge>
                <Badge>hi</Badge>
                <Badge>hi</Badge>
            </Stack>
        </Group>
            </Stack>
    </div>
  )
}

export default Toolbox