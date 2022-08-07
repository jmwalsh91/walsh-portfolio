import { Accordion, Badge, Divider, Group, ScrollArea, Stack, Title, useMantineTheme } from "@mantine/core";

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

let thing = (
    <>

  <Stack key="frameworks" justify='flex-start' align='start'>
    <Title order={3} /* style={{
        color: 'hsl(192.3, 100%, 45.8%)'
    }} */>Frameworks</Title>
    <ItemBadge key={"React"}>React</ItemBadge>
    <ItemBadge key={"Remix"}>Remix</ItemBadge>
  </Stack>
    <Stack key="style">
    <Title order={3}>Style</Title>
    <ItemBadge key={"Emotion"}>Emotion</ItemBadge>
    <ItemBadge key={"Styled"}>Styled</ItemBadge>
    <ItemBadge key={"Tailwind"}>Tailwind</ItemBadge>
  </Stack>
    <Stack key="UILibraries">
    <Title order={3}>UI Libraries</Title>
    <ItemBadge key={"MUI"}>MUI</ItemBadge>
    <ItemBadge key={"Mantine"}>Mantine</ItemBadge>
    <ItemBadge key={"Daisy UI"}>Daisy UI</ItemBadge>

  </Stack>
    <Stack key="QueryCache">
    <Title order={3}>Query/Cache</Title>
    <ItemBadge key={"ReactQuery"}>React Query</ItemBadge>
    <ItemBadge key={"SWR"}>SWR</ItemBadge>
    <ItemBadge key={"Axios"}>Axios</ItemBadge>
  </Stack>
    </>

);

export default function Toolbox({}: Props) {
    const theme = useMantineTheme();
    return (
        <>
      <Title order={2}>Toolbox:</Title>
      
      <Stack>
        <Group position={"left"} align="stretch">{thing}</Group>
      </Stack>
    </>
  );
}
