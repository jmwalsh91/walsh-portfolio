import { Accordion, Badge, Divider, Group, ScrollArea, Stack, Tabs, Title, useMantineTheme } from "@mantine/core";
import { IconBrowser, IconServer, IconTrack } from "@tabler/icons";

import React from "react";
import Surface from "../Surface";
import ItemBadge from "./ItemBadge";

type Props = {};

const techstack: any = {
  frontend: {
    frameworks: ["React", "Remix"],
    style: ["Emotion", "Styled.", "Tailwind"],
    componentLibraries: ["MUI", "Mantine", "Daisy UI", "Radix"],
    queryMgmt: ["React Query", "SWR", "Axios"],
  },
  backend: {
    frameworks: ["Node", "Express"],
    ORM: ["Mongoose", "Prisma"],
    Dbaas: ["Supabase", "MongoDB"],
    hostingCloud: ["Vercel", "Azure", "Heroku"],
  },
};

/* const frontendStack = Object.keys(techstack.frontend).map((item: any) => {
  console.log(item);
  return (
    <Stack key={item}>
      <Title>{item}</Title>
      {item.map((subitem: any) => {
        return <ItemBadge key={subitem}>{subitem}</ItemBadge>;
      })}
    </Stack>
    );
}); */

let frontend = (
    <>

  <Stack key="frameworks" justify='flex-start' align='start'>
    <Title order={3} /* style={{
        color: 'hsl(192.3, 100%, 45.8%)'
    }} */>Frameworks</Title>
    <ItemBadge name={"React"}>React</ItemBadge>
    <ItemBadge name={"Remix"}>Remix</ItemBadge>
  </Stack>
    <Stack key="style">
    <Title order={3}>Style</Title>
    <ItemBadge name={"Emotion"}>Emotion</ItemBadge>
    <ItemBadge name={"Styled"}>Styled</ItemBadge>
    <ItemBadge name={"Tailwind"}>Tailwind</ItemBadge>
  </Stack>
    <Stack key="UILibraries">
    <Title order={3}>UI Libraries</Title>
    <ItemBadge name={"MUI"}>MUI</ItemBadge>
    <ItemBadge name={"Mantine"}>Mantine</ItemBadge>
    <ItemBadge name={"Daisy UI"}>Daisy UI</ItemBadge>

  </Stack>
    <Stack key="QueryCache">
    <Title order={3}>Query/Cache</Title>
    <ItemBadge name={"ReactQuery"}>React Query</ItemBadge>
    <ItemBadge name={"SWR"}>SWR</ItemBadge>
    <ItemBadge name={"Axios"}>Axios</ItemBadge>
  </Stack>
    </>

);
let backend = (
  <>

<Stack key="backendframeworks" justify='flex-start' align='start'>
  <Title order={3} /* style={{
      color: 'hsl(192.3, 100%, 45.8%)'
  }} */>Frameworks</Title>
  <ItemBadge name={"Node"}>Node</ItemBadge>
  <ItemBadge name={"Express"}>Express</ItemBadge>
</Stack>
  <Stack key="style">
  <Title order={3}>Style</Title>
  <ItemBadge name={"Emotion"}>Things</ItemBadge>
  <ItemBadge name={"Styled"}>Other Things</ItemBadge>
  <ItemBadge name={"Tailwind"}>Tailwind</ItemBadge>
</Stack>
  <Stack key="UILibraries">
  <Title order={3}>Still thingses</Title>
  <ItemBadge name={"MUI"}>Way things</ItemBadge>
  <ItemBadge name={"Mantine"}>Cool things</ItemBadge>
  <ItemBadge name={"Daisy UI"}>Sick things bro</ItemBadge>

</Stack>
  <Stack key="QueryCache">
  <Title order={3}>Query/Cache</Title>
  <ItemBadge name={"ReactQuery"}>React Query</ItemBadge>
  <ItemBadge name={"SWR"}>SWR</ItemBadge>
  <ItemBadge name={"Axios"}>Axios</ItemBadge>
</Stack>
  </>

);

export default function Toolbox({}: Props) {
    const theme = useMantineTheme();
    return (
        <>
      <Title order={2}>Toolbox:</Title>
    

      <Tabs defaultValue="Frontend" sx={{
        width: "100%"
      }}>
      <Tabs.List sx={{marginBottom: "1rem"}} >
        <Group >

        <Tabs.Tab value="Frontend" icon={<IconBrowser size={28} />}>Frontend</Tabs.Tab>
        <Tabs.Tab value="Backend" icon={<IconServer size={28} />}>Backend</Tabs.Tab>
        <Tabs.Tab value="SDLC" icon={<IconTrack size={28} />}>SDLC</Tabs.Tab>
        </Group>
      </Tabs.List>
      <Tabs.Panel value="Frontend">
      <Stack sx={{
      padding: "1rem"
      }}>
        <Group position={"left"} spacing={20} align="stretch">{frontend}</Group>
      </Stack>
      </Tabs.Panel>
      <Tabs.Panel value="Backend">
      <Stack>
        <Group position={"left"} spacing={20} align="stretch">{backend}</Group>
      </Stack>
</Tabs.Panel>
      <Tabs.Panel value="SDLC">
      <Stack>
        <Group position={"left"} spacing={20} align="stretch">{backend}</Group>
      </Stack>
        </Tabs.Panel>
      </Tabs>
 
    </>
  );
}
