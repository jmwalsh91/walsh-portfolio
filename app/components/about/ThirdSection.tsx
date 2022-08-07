import { Button, Code, Image, Text, Title, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ThirdSection({}: Props) {
    const theme = useMantineTheme()
  return (
    <motion.div
    initial={{
      opacity: 0,
     border: `5px solid ${theme.colors.accent[8]}`
    }}
    whileInView={{
      opacity: 1,
      margin: '100px',
      border: `5px solid ${theme.colors.primary[5]}`
    }}
    transition={{
        duration: 1.2,
        type: "tween"
    }}
    style={{
      borderRadius: "1rem",
      padding: "3rem",
      border: `1px solid ${theme.colors.primary[5]}`,
      boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
      marginTop: "10rem",
    }}
  >
 <Title sx={{
    color: theme.colors.primary[3]
 }}>Always be coding.</Title>
 <Image src="https://github-readme-stats.vercel.app/api?username=jmwalsh91&amp;theme=react&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=true" alt="whoa"/>
 <img src="https://github-readme-streak-stats.herokuapp.com/?user=jmwalsh91&amp;theme=react&amp;hide_border=false" alt="Github stuff"/>
    </motion.div>
  )
}

export default ThirdSection