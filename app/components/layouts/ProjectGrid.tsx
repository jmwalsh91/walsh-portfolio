import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core'
import { json, LoaderFunction } from '@remix-run/node';
import React from 'react'
import { sb } from '~/services/sb';
import { LeadingProject } from '../cards/LeadingProject';


export const loader: LoaderFunction = async () => {
  //TODO: ERROR Handlers
  const allProjects = await sb.getAllProjects()
  console.log(allProjects)
  return json({allProjects: allProjects})
};

function ProjectGrid() {
const theme = useMantineTheme();

return (
    <Container my="md">
    <LeadingProject image={''} title={''} category={''} description={''} />
  </Container>

  )
}

export default ProjectGrid