import { Center, Container, Stack, Title, useMantineTheme, Text } from '@mantine/core'
import React from 'react'
import { ImageActionBanner } from '~/components/ImageActionBanner'
import portrait from '~/assets/bluepinkportrait.jpg'
import { IconBarrierBlock, IconCone } from '@tabler/icons'

type Props = {}

function Index({}: Props) {
    const theme = useMantineTheme()
  return (
    <Container>
<Container style={{
        borderRadius: "1rem",

        border: `1px solid ${theme.colors.accent[5]}`,
        boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
        width: "25rem",
        marginTop: "5rem"
      }}
      >

    <Stack mt={"2rem"} mb={"2rem"} align="center" justify={"center"}>

<Title order={2} sx={{
    margin: "0 auto",
    color: theme.colors.accent[5],
}}>Under Construction</Title>
<IconBarrierBlock size={80}  color={theme.colors.accent[5]} />
<Text size="xl" color={theme.colors.accent[5]}> There are no posts, yet. Bummer! </Text>
</Stack>
</Container>
        </Container>
  )
}

export default Index