import { Paper } from '@mantine/core';
import React from 'react'

type Props = {}

function GlassCard({}: Props) {
  return (
    <><Paper sx={(theme) => ({
          boxSizing: 'border-box',
          width: '342.62px',
          height: '358.38px',
          background: "linear-gradient(70.46deg, rgba(116, 255, 255, 0.375) 12.34%, rgba(117, 164, 164, 0.75) 54.81%, rgba(250, 244, 194, 0.345) 93.35%)",
          backdropFilter: "blur(28px)",
          borderRadius: "26px",
          transform: "rotate(-42.82deg)",
      })}>
      </Paper></>
  )
}

export default GlassCard