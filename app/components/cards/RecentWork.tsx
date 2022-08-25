import React from 'react'
import {motion} from 'framer-motion'
import { Divider, Text, Grid, List, Space, ThemeIcon, Title, useMantineTheme, Group } from '@mantine/core'
import { IconArrowBigUpLines, IconCircleDashed, IconSchema } from '@tabler/icons'


type Props = {}

function RecentWork({}: Props) {
    const theme = useMantineTheme()
  return (

    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        border: `1px solid ${theme.colors.secondary[5]}`,
    }}
    transition={{
        duration: 3,
        type: "spring",
    }}
    whileHover={{
        border: `1px solid ${theme.colors.success[3]}`,
        boxShadow: `${theme.colors.success[5]} 0px 4px 10px 0px`,
    }}
    style={{
        maxWidth: "80vw",
        marginTop: "5rem",
        borderRadius: "1rem",
        padding: "1rem",
        border: `1px solid ${theme.colors.secondary[5]}`,
        boxShadow: `${theme.colors.secondary[5]} 0px 4px 10px 0px`,
        display: "flex",
        flexDirection: "column",
    }}
    >
                <Title order={2} align="start" ml={"1.5rem"}>Recent work:</Title>
                <Divider mx="1.3rem" />
                <Space h="md"/>

            
  
        <Grid>
            <Grid.Col xs={12} md={6}>
            <Group sx={{
    paddingBottom: '1rem'
}}>
                   <ThemeIcon color="blue" size={24} radius="xl">
                   <IconSchema size={16} />
                 </ThemeIcon>
                 <Title order={3}>Crypto Tx Db + API</Title>
      </Group>
                <Text size="lg" align="justify">

                API and database for an accountant at a leading company in the NFT gaming industry. Utilized Typescript, Prisma, Docker and PostgreSQL to deliver an extendable, scalable, and type-safe solution with robust documentation for multiple endpoints and data shapes.
                </Text>
  
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
            <Group sx={{
    paddingBottom: '1rem'
}}>
                <ThemeIcon color="blue" size={24} radius="xl">
                <IconArrowBigUpLines size={16} />
              </ThemeIcon>
        <Title order={3}>React Optimizations</Title>
        </Group>
            <Text size="lg" align="justify">

                Multiple migrations, audits, and optimizations of different React applications. Leveraged my understanding of various historical React patterns and the value judgements undergirding different internal APIs to quickly decipher design decisions and optimize performance. 
            </Text>
    
        </Grid.Col>
        </Grid>
  

        </motion.div>
  
  )
}

export default RecentWork