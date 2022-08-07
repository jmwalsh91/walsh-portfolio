import {
  Container,
  Grid,
  Group,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

import { IconAccessible, IconLeaf, IconMicroscope } from "@tabler/icons";
import { motion } from "framer-motion";
import React from "react";
import GithubSection from "../about/GithubSection";
import Headshot from "../cards/Headshot";
import { LeadingProject } from "../cards/LeadingProject";
import RoleCards from "../cards/RoleCard";
import ToolAccordion from "../lists/ToolAccordion";
import Toolbox from "../lists/Toolbox";
import Surface from "../Surface";
import { Top } from "../Top";

function AboutGrid() {
  const theme = useMantineTheme();

  return (
    <Container
    fluid
    my="md"
    sx={{
        height: "300vh",
        width: "80vw"
    }}
    >
      <Grid
        sx={{
            width: "100%",
            marginTop: "10vh",
        }}
      >
        <Grid.Col span={4}>
          <div
            style={{
                height: "100%",
                borderRadius: "1rem",
                paddingTop: "1rem",
                border: "rgba(132, 59, 206, 1)",
                boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
            }}
          >
            <Headshot />
      
          </div>
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid gutter="md">
            <Grid.Col span={12}>
              <Stack>
                <Title>Jordan Walsh</Title>

                <Surface width="100%" height="5rem">
                  <Text color={"hsl(192.3, 100%, 45.8%)"} size="xl" sx={{ padding: "1rem" }}>
                    I live in a house that i built in the middle of the desert while recovering from multiple abdominal hernias after spending a winter in a canvas tent.
                    
                  </Text>
               
     
                </Surface>
              </Stack>
            </Grid.Col>

            <Grid.Col span={4} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="React Developer"
                description="Implements modern React architecture and best practices while maintaining a familiarity with legacy methodologies. Translates pre-16.8 codebases into fresh, concurrent-mode enabled @latest."
                icon={<IconLeaf/>}
                gradient={{ deg: 0, from: "cyan", to: "pink" }}
              />
            </Grid.Col>
            <Grid.Col span={4} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="UI Engineer"
                description="Approaches application architecture and UI design with empathy and knowledge of assistive technologies and W3C/WAI-ARIA standards. Delivers a rad experience to users of all stripes."
                icon={<IconAccessible/>}
                gradient={{ deg: 17, from: "pink", to: "purple" }}
              />
            </Grid.Col>
            <Grid.Col span={4} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="Full-Stack Typescript"
                description="API development with Node and Typescript. JSDOC/TSDOC for documentation. Leverages Docker to quickly implement and iterate on backend systems to meet data and UI requirements."
                icon={<IconMicroscope/>}
                gradient={{ deg: 17, from: "blue", to: "lime" }}
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <motion.div
        initial={{
          opacity: 0,
   
          marginRight: "0"
        }}
        whileInView={{
          opacity: 1,
   
          marginRight: "20vw"
        }}
        transition={{
            duration: .4
        }}
        style={{
          borderRadius: "1rem",
          padding: "3rem",
          border: "1px solid rgba(132, 59, 206, .4)",
          boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
          marginTop: "10rem",
        }}
      >
  
    
<Toolbox/>
      </motion.div>

          <Title>Rad stuff</Title>
          <GithubSection/>

    </Container>
  );
}

export default AboutGrid;
