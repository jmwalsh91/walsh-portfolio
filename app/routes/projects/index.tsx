import { Container, Grid, useMantineTheme } from '@mantine/core'
import { useLogger } from '@mantine/hooks'
import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { LeadingProject } from '~/components/cards/LeadingProject'
import GlassCard from '~/components/GlassCard'
import Backdrop from '~/components/layouts/Backdrop'
import ProjectGrid from '~/components/layouts/ProjectGrid'
import { Project, sb } from '~/services/sb'

type Props = {}
export const loader: LoaderFunction = async () => {
  //TODO: ERROR Handlers
  return json(await sb.getAllProjects())
};
 
function Projects({}: Props) {
  const theme = useMantineTheme();
const data = useLoaderData()
  useLogger('ProjectGrid', [data])
return (
  <Backdrop>
    <Container my="md">
      <Grid gutter="xl" m="2rem">

    {data.map((project: Project) => {
      return (
      <Grid.Col
      xs={12}
      sm={6}
      key={project.project_name}>
        <LeadingProject key={project.project_name} image={project.mockup} title={project.project_name} category={'projects'} description={project.card_text} />
        </Grid.Col>
      )
    })
  }
  </Grid>
  </Container>
    </Backdrop>
  )
}

export default Projects