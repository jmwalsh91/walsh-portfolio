import { Avatar, Box, Button, Container, Group, Stack, Title, useMantineTheme } from '@mantine/core'
import { IconMessage, IconPhone, IconRecordMail } from '@tabler/icons'
import React from 'react'

type Props = {}

function CallToAction({}: Props) {
    const theme = useMantineTheme()
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10rem',
        width: '100%',
    }}>

    <Title order={3}>Let's chat!</Title>
        <Box 
        draggable
       
        sx={{
        
        padding: '1rem',
        borderRadius: "1rem",
             border: `1px solid ${theme.colors.primary[5]}`,
             boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
        }}>
<Group align="center" >
    <Button 
    variant="outline"
    
    radius={120} mx="auto">
<IconPhone/> 
    </Button>

    <Button 
    variant="outline"
    
    radius={120} mx="auto">
    <IconMessage/>
    </Button>
</Group>
            </Box>
        </Container>
  )
}   

export default CallToAction