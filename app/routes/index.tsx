import { Button, Slider, ThemeIcon, Title, useMantineTheme, Text, Container, Space, Paper, Stack, Center } from "@mantine/core";
import { motion } from "framer-motion";

import cloud from "~/assets/cloud1.png"
export default function Index() {
  const theme = useMantineTheme()
  return (
  <Center>
<Container>

  <Paper p={30}
  sx={{
    width: "350px",
    background:
    "linear-gradient(70.46deg, rgba(116, 255, 255, 0.375) 12.34%, rgba(117, 164, 164, 0.75) 54.81%, rgba(250, 244, 194, 0.345) 93.35%)",
    backdropFilter: "blur(9px)",
    borderRadius: "26px",
    border: '2px solid black'
  }}
  shadow={"md"}>
<Title order={1} sx={{color: theme.colors.accent[5]}}>Jordan Walsh Portfolio</Title>
<Space h="md"/>
<Text>Hi</Text>
<Stack>

      <Button>Primary</Button>
      <Button color="secondary" m={6}> secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="success">Success</Button>
      </Stack>
      <Slider
      sx={{width: '300px'}}
      color={"secondary"}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      />
 </Paper>
 <motion.img src={cloud} width={"100%"} style={{
  marginTop: "50rem",
  right: 0
 }} whileHover={{
   scale: 1.1
  }}></motion.img>
 </Container>
  </Center>
  );
}
