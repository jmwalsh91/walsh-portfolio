import { createStyles, Overlay, Container, Title, Button, Text, Center, Group, Space, Mark, useMantineTheme, Image, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { ProfileCard } from '../cards/ProfileCard';
import { SmallBio } from '../cards/SmallBio';
import SynthMesa from 'public/assets/pics/synthmesa.webp'
const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      `url('https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/synthmesamidpng.webp?t=2022-08-24T23%3A04%3A02.937Z')` ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 3,
    zIndex: 1,
    position: 'relative',

    
  },

  title: {
    color: theme.white,
    fontSize: '3rem',
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: '1rem',
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },
  profile: {
    boxShadow: '0px 4px 24px 6px rgba(0, 0, 0, 0.55)',
 
},
profileContainer: {
    [theme.fn.smallerThan('sm')]: {
        display: 'none'
  },
},
  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));
/* type Props = {
    slot1: React.ReactNode
    slot2?: React.ReactNode
} */
export function SlotteredHero({}) {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  const narrowView = useMediaQuery('(max-width: 768px)')


  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, .25) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
     <Grid>
        <Grid.Col xs={0} sm={4}>
        <motion.div
        className={classes.profileContainer}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            whileHover={{
                border: `3px solid ${theme.colors.primary[3]}`,
            }}
         style={{
            padding: ".8rem",
            border: `3px solid ${theme.colors.primary[6]}`,
        }}>

        <Image src={
            "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profileSmall.webp?t=2022-08-24T23%3A26%3A11.961Z"
        }
        height={280}
        radius={theme.radius.md}
        className={classes.profile}
        
        />
        </motion.div>
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
        duration: .4,
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
        backdropFilter: "saturate(200%)  brightness(70%)"
        
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
                /> : 
                
                null}
            
    <Title  className={classes.title}>

           Hey there, I'm Jordan.
    </Title>
              </Group>
    <Space h="lg"/>
<Text className={classes.description} align="justify"> I'm a <Mark>software developer</Mark>  living off-grid in a house I built in the high desert of Northern New Mexico. When I'm not building applications or otherwise interfacing with software-related thingamajigs, I'm often building with hammer and nail, playing chess, making music, playing with my dogs, or reading.</Text>
<Space h="lg"/>
<Text className={classes.description} align="justify"><Mark>I'm interested in hearing about opportunities involving any and every "part of the stack," but I have a particular passion for <Mark color={theme.colors.primary[4]}>React</Mark> and the parts of the application closest to the user.</Mark> </Text>



    </motion.div>
    </Grid.Col>
     
                </Grid>
      </Container>
    </div>
  );
}