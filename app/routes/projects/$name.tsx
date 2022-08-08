import { AspectRatio, Badge, Center, Container, Grid, Group, Image, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";
import Surface from "~/components/Surface";

type Props = {};
const tech = [
    "react",
    "typescript",
    "node",
    "express",
    "MUI",
    "Tone.js",
    "Tonal.js"
]
function $name({}: Props) {
    const theme = useMantineTheme();
  return (
    <>
      <Container fluid>
        <Title order={1} align="right" mt={"3rem"} mb={"1rem"}>crypTones</Title>
        <Grid>
            <Grid.Col span={6} xs={12} lg={6}>
                <Image src="https://www.jmwalsh.dev/static/media/cryptonesv2.1ca65417c164c0c749fa.jpg" sx={{
                 border: "1px solid rgba(132, 59, 206, .4)",
                 boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                }}/>
                </Grid.Col>
                <Grid.Col span={6} xs={12} lg={6}>
                    <Stack>
                    <div style={{
          borderRadius: "1rem",
          padding: "3rem",
          border: "1px solid rgba(132, 59, 206, .4)",
          boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
        }}>
           Generate unique compositions with cryptocurrency price data.
        </div>
        <div style={{
          borderRadius: "1rem",
          padding: "3rem",
          border: "1px solid rgba(132, 59, 206, .4)",
          boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
    
        }}>
            <Text>crypTones was inspired by techniques for composing generative music, data sonification, and modular synthesis. Featuring two unique algorithms for converting cryptocurrency price data into sequences of frequency values, and multiple additional parameters such as filtering notes based on key and mode, millions of unique combinations are possible from the same set of an initial data. Frontend uses SWR to synchronize data between components and leverages Suspense and React-Error-Boundary to reduce perceivable loading states, ToneJS and Tonal for converting and filtering note/frequency values and generating audio with the Web Audio API, and ApexCharts for rendering cryptocurrency price data.</Text>
           Built with: 
        {tech.map((item) => (
            <Badge key={item}>{item}</Badge>
        ))}
        </div>
                    </Stack>
                </Grid.Col>


        </Grid>
      </Container>
    </>
  );
}

export default $name;
