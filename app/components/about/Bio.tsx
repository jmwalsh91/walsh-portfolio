import { Title, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'
import { BioCard } from '../cards/BioCard'
import { ProfileCard } from '../cards/ProfileCard'
import Surface from '../Surface'


type Props = {}

function Bio({}: Props) {
    const theme = useMantineTheme()
  return (
    <>
    <motion.div
    initial={{
        opacity: 0,
        border: `5px solid ${theme.colors.accent[8]}`,
    }}
    whileInView={{
        opacity: 1,
        border: `5px solid ${theme.colors.success[5]}`,
    }}
    transition={{
        duration: 1.2,
        type: "tween",
    }}
    style={{
        maxWidth: "95vw",
        borderRadius: "1rem",
        padding: "1rem",
        border: `1px solid ${theme.colors.success[5]}`,
        boxShadow: `${theme.colors.success[8]} 0px 4px 24px 0px`,
        display: "flex",
        flexDirection: "column",
    }}
    >
  
    <Title>

            Hola señorx,
    </Title>


    </motion.div>
    <motion.div
    initial={{
        opacity: 0,
        border: `5px solid ${theme.colors.accent[8]}`,
    }}
    whileInView={{
        opacity: 1,
        border: `5px solid ${theme.colors.success[5]}`,
    }}
    transition={{
        duration: 1.2,
        type: "tween",
    }}
    whileHover={{
        scaleY: 1.2,
    }}
    style={{
        maxWidth: "95vw",
        borderRadius: "1rem",
        padding: "1rem",
        border: `1px solid ${theme.colors.success[5]}`,
        boxShadow: `${theme.colors.success[8]} 0px 4px 24px 0px`,
        display: "flex",
        flexDirection: "column",
    }}
    >
  
    <Title>

            Hola señorx,
    </Title>
    <ProfileCard
              image={
                "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profile2crop.jpg?t=2022-08-05T03%3A46%3A56.547Z"
              }
              avatar={
                "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profile2crop.jpg?t=2022-08-05T03%3A46%3A56.547Z"
              }
              name={"Jordan Walsh"}
              job={"UI Engineer"}
              stats={[]}
            />

    </motion.div>
   
      </>
  )
}

export default Bio