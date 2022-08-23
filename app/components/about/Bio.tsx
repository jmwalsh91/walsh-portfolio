import { Grid, Title, useMantineTheme, Text, Space, Group, Mark } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import { BioCard } from '../cards/BioCard'
import { ProfileCard } from '../cards/ProfileCard'
import { SmallBio } from '../cards/SmallBio'
import Surface from '../Surface'
import bgImage from 'public/assets/grid_0.png'

type Props = {}

function Bio({}: Props) {
    const theme = useMantineTheme()
    const narrowView = useMediaQuery('(max-width: 600px)')
  return (
    <>
    <Grid>
    <Grid.Col  xs={12} sm={4}>
    {narrowView ? 
    null: 
    <ProfileCard
              image={
                  bgImage
                }
                avatar={
                    "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/public/profile1.jpg"
                }
                name={"Jordan Walsh"}
                job={"UI Engineer"}
                stats={[]}
                />

}
    </Grid.Col>
      <Grid.Col xs={12} sm={8}>
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
      <Group>

  {narrowView? <SmallBio
              avatar={
                "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/public/profile1.jpg"
              }
              name={"Jordan Walsh"}
              title={"Software Developer"}
              
              email={"jordan@jmwalsh.dev"}
              /> : null}
    <Title order={3} align="end">

           Hey there, I'm Jordan.
    </Title>
              </Group>
    <Space h="lg"/>
<Text size="xl" align="justify"> I'm a <Mark>software developer</Mark>  living off-grid in a house I built in the high desert of Northern New Mexico. When I'm not building applications or otherwise interfacing with software-related thingamajigs, I'm often building with hammer and nail, playing chess, making music, playing with my dogs, or reading.</Text>
<Space h="lg"/>
<Text size="xl" align="justify"><Mark>I'm interested in hearing about opportunities involving any and every "part of the stack," but I have a particular passion for <Mark color={theme.colors.primary[4]}>React</Mark> and the parts of the application closest to the user.</Mark> </Text>

<Text></Text>

    </motion.div>
    </Grid.Col>  
   
                </Grid>
      </>
  )
}

export default Bio