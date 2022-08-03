import { Badge, Paper, Title } from '@mantine/core'
import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <div>
        <Paper sx={{
            width: "30rem",
            height: '30rem',
            borderRadius: '1rem',
            border: '1px solid pink'
        }}>
            <Title>
                Jordan Walsh
            </Title>
            <Badge variant='gradient'>React</Badge>
        </Paper>
    </div>

  )
}

export default index