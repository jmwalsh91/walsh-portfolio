import { Container, Grid, SimpleGrid, Skeleton, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { IconLeaf, IconMicroscope } from '@tabler/icons';
import React from 'react'
import Headshot from '../cards/Headshot';
import { LeadingProject } from '../cards/LeadingProject';
import RoleCards from '../cards/RoleCard';
import Surface from '../Surface';
import {Top} from '../Top'


function AboutGrid() {
const theme = useMantineTheme();

return (
    <Container fluid my="md" sx={{
        height: "300vh"
    }}>
{/*       <div dangerouslySetInnerHTML={{__html: `${Top}`}}/> */}
    <Grid sx={{
        width: "100%",
        marginTop: "10vh"
    }}>
        <Grid.Col span={4}>
        <Headshot/>
        </Grid.Col>
    <Grid.Col span={8}>
        <Grid gutter="md" justify="around">
        <Grid.Col span={12}>
            <Stack>
                <Title>Jordan Walsh</Title>
          
                <Surface width="100%" height="5rem">
                </Surface>
        </Stack>
        </Grid.Col>
        
        <Grid.Col span={4}>
    <RoleCards title='React Developer'
   description='Implements modern React architecture and best practices while maintaining a familiarity with legacy methodologies. Translates pre-16.8 codebases into fresh, concurrent-mode enabled @latest.'
   icon={IconLeaf}
   gradient={{ deg: 0, from: 'cyan', to: 'pink' }}/>
        </Grid.Col>
        <Grid.Col span={4}>
        <RoleCards  
        title='UI Engineer'
    description='Approaches application architecture and UI design with empathy and knowledge of assistive technologies and W3C and WAI-ARIA standards. Delivers a rad experience to users of all stripes.'
    icon={IconMicroscope}
    gradient={{ deg: 17, from: 'pink', to: 'purple' }}/>
        </Grid.Col>
        <Grid.Col span={4}>
        <RoleCards  
        title='Full-Stack Typescript'
    description='API development with Node and Typescript. JSDOC/TSDOC for documentation. Leverages Docker to quickly implement and iterate on backend systems to meet data and UI requirements.'
    icon={IconMicroscope}
    gradient={{ deg: 17, from: 'pink', to: 'purple' }}/>
        </Grid.Col>
</Grid>
    </Grid.Col>
    </Grid>
  </Container>

  )
}

export default AboutGrid