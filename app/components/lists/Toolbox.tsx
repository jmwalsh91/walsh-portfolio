import { Badge, Group, Stack, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import Surface from '../Surface'
import ItemBadge from './ItemBadge'

type Props = {}


const techstack: any = {
    frontend: {
frameworks: [
 "React",
 "Remix",
],
style: [
    "Emotion",
    "Styled.",
    "Tailwind"
],
componentLibraries: [
    "MUI",
    "Mantine",
    "Daisy UI",
    "Radix"
],
queryMgmt: [
    "React Query",
    "SWR",
    "Axios"
]},
backend: {
    frameworks: [
        "Node",
        "Express"
    ],
    ORM: [
        "Mongoose",
        "Prisma"
    ],
    Dbaas: [
        "Supabase",
        "MongoDB"
    ],
    hostingCloud: [
        "Vercel",
        "Azure",
        "Heroku"
    ]
}
}

const frontendStack = techstack.frontend.map((item: any) => {
    return (
        <Stack key={item}>
            <Title>{item}</Title>
        {item.map((subitem: any) => {
            return (
            <ItemBadge key={subitem}>{subitem}</ItemBadge>
            )
        })}
        </Stack>

    )

})


function Toolbox({}: Props) {
    const theme = useMantineTheme()
  return (
    <div>
        <Title>Toolbox</Title>
        <Stack>
       
        <Group>
            {frontendStack}
        </Group>
            </Stack>
    </div>
  )
}

export default Toolbox