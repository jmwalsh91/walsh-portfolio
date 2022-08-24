import {
  Container,
  Divider,
  Grid,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { IconAccessible, IconLeaf, IconMicroscope } from "@tabler/icons";
import Bio from "../about/Bio";

import GithubSection from "../about/GithubSection";
import SmGithubSection from "../about/SmGithubSection";

import RecentWork from "../cards/RecentWork";
import RoleCards from "../cards/RoleCard";


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
        maxWidth: "70rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        sx={{
          width: "100%",
marginTop: "2rem"
        }}
      >
        <Grid.Col xs={12} md={12}>
          {/* {narrowView ? (
            <SmallBio
              avatar={
                "https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profile2crop.jpg?t=2022-08-05T03%3A46%3A56.547Z"
              }
              name={"Jordan Walsh"}
              title={"Software Developer"}
              phone={"(405) 479 3668"}
              email={"jordan@jmwalsh.dev"}
            />
          ) : (
            <BioCard
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
          )} */}
          <Bio/>
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
   {/*    <motion.div
        initial={{
          opacity: 0,
          
          marginRight: "0",
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          borderRadius: "1rem",
          padding: "1rem",
          border: "1px solid rgba(132, 59, 206, .4)",
          boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
          marginTop: "10rem",
          width: "85vw"
        }}
        >
        <Toolbox />
      </motion.div> */}

{/*       <Title order={3} sx={{
        marginTop: "10rem",
      }}>Documentation Nerd</Title>
      <motion.div
      style={{
        borderRadius: "1rem",
        padding: "1rem",
        border: "1px solid rgba(132, 59, 206, .4)",
        boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
        width: "40rem"
      }}
      >

     <CodeSample/>
      </motion.div> */}
      {narrowView ? <SmGithubSection /> : <GithubSection />}
     {/*  <div style={{ height: "10rem" }}>
        <CallToAction />
      </div> */}
    </Container>
  );
}

export default AboutGrid;
