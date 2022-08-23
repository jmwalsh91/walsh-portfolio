import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core'
import { useLogger } from '@mantine/hooks';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { sb } from '~/services/sb';
import { LeadingProject } from '../cards/LeadingProject';



export const loader: LoaderFunction = async () => {

  return json(await sb.getAllProjects())
 
};

export default function ProjectGrid() {
const theme = useMantineTheme();
const data = useLoaderData()
useLogger('ProjectGrid', [data])
return (
    <Container my="md">
    <LeadingProject image={''} title={''} category={''} description={''} />
  </Container>

  )
}
