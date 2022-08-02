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
export default function AppShellDemo({children}: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
    fixed={false}
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
   
      navbar={
        <Nav/>
      }
    >
        {
            /**
             * shell children styles here
             */
        }
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


