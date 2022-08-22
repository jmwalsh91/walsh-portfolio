import { Avatar, Box, Button, Container, Group, Stack, Title, useMantineTheme, Text } from '@mantine/core'
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
        marginTop: '10vh'
    }}>
    <Text sx={{
        fontFamily: theme.headings.fontFamily,
        fontSize: "1rem"
    }}>
        There is no separation any longer, no emptiness, no absence:
 you enter the screen and the visual image unimpeded. 
You enter life itself as though walking on to a screen. 
 You slip on your own life like a data suit. 
-Baudrillard, "The Mental Diaspora of the Networks"

        </Text>
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