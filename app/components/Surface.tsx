import { Paper, Text, ThemeIcon, useMantineTheme } from '@mantine/core'
import React from 'react'

type Props = {}

function Surface({}: Props) {
    const theme = useMantineTheme()
  return (
    <Paper
    shadow='xl'
    sx={{
        backgroundColor: 'black',
        opacity: 0.8,
        width: "450px",
        height: "450px",
        borderRadius: "14px"
    }}><Text color={'dimmed'}>Surface</Text>Surface</Paper>
  )
}

export default Surface