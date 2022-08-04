import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core'
import React from 'react'

type Props = {}
const PRIMARY_COL_HEIGHT = 360;
function ProjectGrid({}: Props) {
    const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  return (
    <Container my="md">
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Skeleton height={PRIMARY_COL_HEIGHT} width="20rem"  radius="md" animate={true} />
      <Grid gutter="md">
        <Grid.Col>
          <Skeleton height={SECONDARY_COL_HEIGHT} width="20rem" radius="md" animate={true} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} width="8rem" radius="md" animate={true} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} width="8rem" radius="md" animate={true} />
    
        </Grid.Col>
      </Grid>
    </SimpleGrid>
  </Container>

  )
}

export default ProjectGrid