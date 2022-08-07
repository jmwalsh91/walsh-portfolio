import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  AspectRatio,
  ScrollArea,
  Center,
} from '@mantine/core';

import bg from '~/assets/CloudBG.jpg'
import { Link } from '@remix-run/react';
import Nav from './Nav';
import { useMediaQuery } from '@mantine/hooks';
export default function AppShellDemo({children}: any) {
  const theme = useMantineTheme();
  const notPhone = useMediaQuery('(min-width: 900px)')
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
    fixed={false}
      styles={{
        main: {
          background: 'rgb(19,17,28)',
          backgroundImage:'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), none'
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
   
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Nav/>
        </MediaQuery>
      }
      header={
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="lg"
          color={theme.colors.gray[6]}
          mr="xl"
          mt=".5rem"
        />
      </MediaQuery>
      }
    >
      <div
      style={{  
        overflow: 'none'}}
        >

  <ScrollArea sx={{height: '100vh', width: "90vw"}}>


<Center>

     {children}
</Center>
 
            </ScrollArea>
            </div>
 
    </AppShell>
  );
}


