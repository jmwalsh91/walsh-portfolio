import {
  Affix,
  Container,
  Divider,
  Grid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { IconAccessible, IconLeaf, IconMicroscope } from "@tabler/icons";
import { motion } from "framer-motion";
import Bio from "../about/Bio";
import CallToAction from "../about/CallToAction";
import CodeSample from "../about/CodeSample";
import GithubSection from "../about/GithubSection";
import ProjectHighlight from "../about/ProjectHighlight";
import { SlotteredHero } from "../about/SlottedHero";
import SmGithubSection from "../about/SmGithubSection";

import RecentWork from "../cards/RecentWork";
import RoleCards from "../cards/RoleCard";

import Toolbox from "../lists/Toolbox";


function AboutGrid() {
  const theme = useMantineTheme();
  const narrowView = useMediaQuery("(max-width: 600px)");

  return (
    <Container
      fluid
      my="md"
      sx={{
        height: "400vh",
        width: "80vw",
        maxWidth: "90rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          marginTop: "1.2rem"
        }}
      >
        <Grid.Col xs={12} md={12}>
         <SlotteredHero/>
        </Grid.Col>
    
        <Grid.Col span={12}>
          <Grid gutter="md">
            <Grid.Col span={12}>
              <Divider
                label="About Me"
                color={theme.colors.primary[2]}
                labelPosition="center"
                labelProps={{
                  component: Title,
                  size: "xl",
                  color: theme.colors.primary[3],
                }}
              />
            </Grid.Col>
            <Grid.Col span={12} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="React Developer"
                description="Implements modern React architecture and best practices while maintaining a familiarity with legacy methodologies. Translates pre-16.8 codebases into fresh, concurrent-mode enabled @latest."
                icon={<IconLeaf />}
                gradient={{ deg: 0, from: "cyan", to: "pink" }}
              />
            </Grid.Col>
            <Grid.Col span={12} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="UI Engineer"
                description="Approaches application architecture and UI design with empathy and knowledge of assistive technologies and W3C/WAI-ARIA standards. Delivers a rad experience to users of all stripes."
                icon={<IconAccessible />}
                gradient={{ deg: 17, from: "pink", to: "purple" }}
              />
            </Grid.Col>
            <Grid.Col span={12} xl={4} lg={4} md={12} sm={12} xs={12}>
              <RoleCards
                title="Full-Stack Typescript"
                description="API development with Node and Typescript. JSDOC/TSDOC for documentation. Leverages Docker to quickly implement and iterate on backend systems to meet data and UI requirements."
                icon={<IconMicroscope />}
                gradient={{ deg: 17, from: "blue", to: "lime" }}
                />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
                <RecentWork/>
                <ProjectHighlight/>
      {narrowView ? <SmGithubSection /> : <GithubSection />}
      <div style={{ height: "15rem" }}>
       {/* <Affix position={{ bottom: 5, right: 10}}> <CallToAction /> </Affix> */}
      </div>
     
    </Container>
  );
}

export default AboutGrid;
