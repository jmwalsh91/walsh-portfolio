import { Paper } from '@mantine/core'
import React from 'react'

type Props = {}

function Surface({}: Props) {
  return (
    <Paper
    sx={{
        width: "900",
        height: "900"
    }}>Surface</Paper>
  )
}

export default Surface