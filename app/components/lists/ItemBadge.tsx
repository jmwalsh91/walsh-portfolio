import { Paper } from '@mantine/core'
import React from 'react'

type Props = {
    children: React.ReactNode,
    key: string
}

function ItemBadge({children}: Props) {
  return (
    <Paper
    
    shadow="xl"
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "saturate(200%) blur(16px) brightness(130%)",
      boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
      border: "rgba(132, 59, 206, 1)",
    
      opacity: 0.8,
      borderRadius: "14px",
      marginY: "1rem",
        width: "5rem"
    }}
  >
    
    {children}
    </Paper>
  )
}

export default ItemBadge