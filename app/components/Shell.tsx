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
} from '@mantine/core';

import bg from '~/assets/OldTimey.jpg'
import { Link } from '@remix-run/react';
export default function AppShellDemo({children}: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
          <Link to="/">
            Home
          </Link>
          <Link to="projects">
            Projects
          </Link>
          <Link to="blog">
            Blog
          </Link>
        </Navbar>
      }
  
      
      
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Jordan Walsh Portfolio</Text>
          </div>
        </Header>
      }
    >
        {
            /**
             * shell children styles here
             */
        }
         <AspectRatio ratio={720 / 1080} sx={{ maxWidth: '90vw' }} mx="auto">
  
        <div style={{  
            height: '90vh',
            width: '90vw',
            backgroundImage: "url(" + bg + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

     {children}
  </div>  
    </AspectRatio>
    </AppShell>
  );
}


