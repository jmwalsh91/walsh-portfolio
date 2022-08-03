import { Paper, Text } from '@mantine/core'
import React from 'react'

type Props = {}

function Surface({}: Props) {
  return (
    <Paper
    sx={{
        backgroundColor: 'black',
        opacity: 0.8,
        width: "450px",
        height: "450px",
        borderRadius: "14px"
    }}><Text color="blue">Surface</Text>Surface</Paper>
  )
}

export default Surface