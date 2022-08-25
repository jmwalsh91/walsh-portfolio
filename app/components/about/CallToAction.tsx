import { Avatar, Box, Button, Container, Group, Stack, Title, useMantineTheme, Text } from '@mantine/core'
import { IconMessage, IconPhone, IconRecordMail } from '@tabler/icons'
import React from 'react'

type Props = {}

function CallToAction({}: Props) {
    const theme = useMantineTheme()
  return (
<>
        <Box 
        sx={{
            width: '5rem',
            backgroundColor: theme.colors.purple[9],
            opacity: '0.6',
            padding: '1rem',
            borderRadius: "1rem",
            border: `1px solid ${theme.colors.primary[3]}`,
            boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
        }}>
<Stack align="center" >
   

    <Button 
    variant="filled"
    color={theme.colors.primary[3]}
    radius={120} mx="auto">
    <IconMessage/>
    </Button>
</Stack>
            </Box>
        </>
   
  )
}   

export default CallToAction