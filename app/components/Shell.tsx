import { useState } from 'react';
import {
  AppShell,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Center,
  Container,

} from '@mantine/core';

import Nav from './Nav';
import XsNav from './XsNav';




export default function Shell({children}: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  

  return (
    <AppShell

      styles={{
        main: {
          background: 'rgb(19,17,28)',
          backgroundImage:'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), none'
        },
      }}

   
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Nav/>
        </MediaQuery>
      }
      header={
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <div>
        <Burger
        aria-label='Menu'
        aria-controls='navbar'
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="lg"
          color={theme.colors.primary[3]}
          m="sm"
          />
        <XsNav opened={opened} setOpened={setOpened}/>
    
          </div>
      </MediaQuery>
      }
    >
 


<Container fluid >

  <ScrollArea type="hover" sx={{height: '100vh'}} mx="-lg" >
<Center>

     {children}
</Center>
            </ScrollArea>
</Container>
 
  
 
    </AppShell>
  );
}


