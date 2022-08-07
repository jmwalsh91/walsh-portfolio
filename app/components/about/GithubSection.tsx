import { Button, Code, Group, Image, Text, Title, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function GithubSection({}: Props) {
    const theme = useMantineTheme()
  return (
    <>
    <Title sx={{
      color: theme.colors.primary[3],
      marginTop: "10rem",
      marginBottom: ".5rem"
    }}
    align="right"
    >Always be coding.</Title>
    <motion.div
    initial={{
      opacity: 0,
      border: `5px solid ${theme.colors.accent[8]}`
    }}
    whileInView={{
      opacity: 1,
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
      maxWidth: "80rem"
    }}
    >
      <Group>

 <Image src="https://github-readme-stats.vercel.app/api?username=jmwalsh91&amp;theme=react&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=true" alt="Shows github stats. Total stars, commits, pull requests, issues, and organizations commited to." width="35rem" sx={{
 minWidth: "20rem",
 }}/>
 <Image src="https://github-readme-streak-stats.herokuapp.com/?user=jmwalsh91&amp;theme=react&amp;hide_border=false" alt="Shows total contribution, current amount of days in a row where a contribution took place, and the length of the longest streak." width="35rem"/>
    </Group>
    </motion.div>
    </>
  )
}

export default GithubSection