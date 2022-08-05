import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core'
import React from 'react'
import Headshot from '../cards/Headshot';
import { LeadingProject } from '../cards/LeadingProject';
import Surface from '../Surface';




function AboutGrid() {
const theme = useMantineTheme();

return (
    <Container my="md">
    <Grid>
        <Grid.Col span={6}>
        <Headshot/>
        </Grid.Col>
    <Grid.Col span={6}>
        <Grid gutter="md" justify="around">
        <Grid.Col span={12}>
            <Surface width="28rem" height="10rem">Description</Surface>
        </Grid.Col>
        <Grid.Col span={4}>
            <Surface width="7rem" height="10rem">Card</Surface>
        </Grid.Col>
        <Grid.Col span={4}>
            <Surface width="7rem" height="10rem">Card2</Surface>
        </Grid.Col>
        <Grid.Col span={4}>
            <Surface width="7rem" height="10rem">Card3</Surface>
        </Grid.Col>
</Grid>
    </Grid.Col>
    </Grid>
  </Container>

  )
}

export default AboutGrid