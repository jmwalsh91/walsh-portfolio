import { Paper, Text } from '@mantine/core'
import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode,
    name: string
}

function ItemBadge({children, name}: Props) {
  return (
    <motion.div>
      
    <Paper
    key={name}
    shadow="xl"
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "saturate(200%) blur(16px) brightness(130%)",
      boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
      border: "rgba(132, 59, 206, 1)",
      
      opacity: 0.8,
      borderRadius: "8px",
      marginY: "1rem",
      width: "7rem",
      justifyContent: "center",
      alignContent: "center",
      justifyItems: "center",
    }}
    >
    <Text size="xl" variant="text" color="white" align='center' sx={{
      
    }}>
    {children}

    </Text>
    </Paper>
      </motion.div>
  )
}

export default ItemBadge