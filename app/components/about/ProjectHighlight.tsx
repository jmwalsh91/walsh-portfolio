import {motion} from 'framer-motion'
import { Divider, Text, Grid, List, Space, ThemeIcon, Title, useMantineTheme, Paper, Container, Stack, Group } from '@mantine/core'
import { IconArrowBigUpLines, IconCircleDashed, IconDeviceDesktopAnalytics, IconSchema, IconSchool } from '@tabler/icons'
import CopyEmail from '../buttons/CopyEmail'
import CopyDiscord from '../buttons/CopyDiscord'


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
        maxWidth: "70rem",
        marginTop: "5rem",
        borderRadius: "1rem",
        padding: "1rem",
        border: `1px solid ${theme.colors.secondary[5]}`,
        boxShadow: `${theme.colors.secondary[5]} 0px 4px 10px 0px`,
        display: "flex",
        flexDirection: "column",
    }}
    >
                <Title align="start" ml={"1.5rem"}>Current Projects</Title>
                <Divider mx="1.3rem" />
                <Space h="md"/>

            
  
        <Grid>
            <Grid.Col xs={12} sm={6} md={4}>
    <Paper sx={{
        padding: '1rem',
        height: '100%'
    }}>
<Group sx={{
    paddingBottom: '1rem'
}}>

                <ThemeIcon color="blue" size={24} radius="xl">
                   <IconDeviceDesktopAnalytics size={16} />
                 </ThemeIcon>
<Title order={3}>BlogCMS</Title>   
</Group>
                <Text size="lg" align="justify">

              Lightweight CMS desktop application built with NeutralinoJS and React. Developed for the purpose of managing content on the blog and projects page on this website. Currently comparing performance and functionality of NeutralinoJS vs Electron, with plans to provide more functionality for note-keeping and project planning. 
                </Text>
      
    </Paper>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} md={4}>
          <Paper sx={{
            padding: '1rem',
            height: '100%'
          }}>
<Group sx={{paddingBottom: '1rem'}}>

                <ThemeIcon color="blue" size={24} radius="xl">
                <IconSchool size={16} />
              </ThemeIcon>
<Title order={3}>Critos</Title>
</Group>
            <Text size="lg" align="justify">

                Minimal and distraction-free collaborative education platform inspired by the Socratic Method and distributed decision making processes, Critos is a platform that allows users to design curricula and structure learning experiences across multiple formats, and prompt course participants to engage thoughtfully with texts with longer-form responses.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={4}>
           <Paper sx={{
            padding: '1rem',
            height: '100%'
           }}>
                <Group sx={{
                    paddingBottom: '1rem'
                }}>
                    
                <ThemeIcon color="blue" size={24} radius="xl">
                <IconArrowBigUpLines size={16} />
              </ThemeIcon>
            <Title order={3}> crypTones </Title>
                </Group>
            <Text size="lg" align="justify">

            crypTones was inspired by techniques for composing generative music, data sonification, and modular synthesis. Featuring two unique algorithms for converting cryptocurrency price data into sequences of frequency values, and multiple additional parameters such as filtering notes based on key and mode, millions of unique combinations are possible from the same set of an initial data. 
            </Text>
             
           </Paper>
        </Grid.Col>
        </Grid>
           <Container sx={{
            border: `1px solid ${theme.colors.secondary[5]}`,
            borderRadius: "1rem",
            padding: "1rem",
            boxShadow: `${theme.colors.secondary[5]} 0px 4px 10px 0px`,
            marginTop: "3rem",
            marginBottom: "2rem"
           }}>
<Stack>

           <Text  size="xl" sx={{marginTop: '1rem'}}>Want to collaborate?
            Send me an email, or message me on Discord!</Text>
            <CopyEmail/> <CopyDiscord/>
</Stack>
           </Container>
        </motion.div>
  
  )
}

export default RecentWork
  