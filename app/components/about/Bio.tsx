import { Grid, Title, useMantineTheme, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import { BioCard } from '../cards/BioCard'
import { ProfileCard } from '../cards/ProfileCard'
import { SmallBio } from '../cards/SmallBio'
import Surface from '../Surface'


type Props = {}

function Bio({}: Props) {
    const theme = useMantineTheme()
    const narrowView = useMediaQuery('(max-width: 600px)')
  return (
    <>
    <Grid>
    <Grid.Col  xs={12} sm={5}>
    
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



    </Grid.Col>
      <Grid.Col xs={12} sm={7}>
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        border: `1px solid ${theme.colors.secondary[5]}`,
    }}
    transition={{
        duration: .3,
        type: "spring",
    }}
    whileHover={{
        border: `1px solid ${theme.colors.success[3]}`,
        boxShadow: `${theme.colors.success[5]} 0px 4px 10px 0px`,
    }}
    style={{
        maxWidth: "95vw",
        borderRadius: "1rem",
        padding: "1rem",
        border: `1px solid ${theme.colors.secondary[5]}`,
        boxShadow: `${theme.colors.secondary[5]} 0px 4px 10px 0px`,
        display: "flex",
        flexDirection: "column",
    }}
    >
  {narrowView? <SmallBio
              avatar={
                "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profile2crop.jpg?t=2022-08-05T03%3A46%3A56.547Z"
              }
              name={"Jordan Walsh"}
              title={"Software Developer"}
              phone={"(405) 479 3668"}
              email={"jordan@jmwalsh.dev"}
            /> : null}
    <Title>

           Hey there, I'm Jordan.
    </Title>
<Text size="xl"> I'm a software developer living off-grid in a house I built in the high desert of Northern New Mexico. When I'm not building applications, I'm often building stuff hammer-and-nail, playing chess, making music, playing with my dogs, or reading.</Text>

<Text></Text>

    </motion.div>
    </Grid.Col>  
   
                </Grid>
      </>
  )
}

export default Bio