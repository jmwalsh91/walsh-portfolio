import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Footer, MediaQuery, Container, Space, Box, Text} from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconPencil,
} from '@tabler/icons';
import { NavLink, useNavigate } from '@remix-run/react';
import { useMediaQuery } from '@mantine/hooks';
import NavLgMenu from './NavLgMenu';


const useStyles = createStyles((theme) => ({
  link: {
    width: '4rem',
    height: '4rem',
    borderRadius: theme.radius.md,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.colors.primary[7]
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      color: theme.colors.success[5]
    },
  },
}));

export interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
 
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })} aria-label={label}>
        <Icon stroke={1.5} />
        <Text>
          {label}
          </Text>
      </UnstyledButton>
  );
}

export const pages = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconDeviceDesktopAnalytics, label: 'Projects' },
  { icon: IconPencil, label: 'blog'},
  { icon: IconCalendarStats, label: 'Calendar' },
  { icon: IconUser, label: 'About' },
];



export default function Nav() {
  const [active, setActive] = useState(2);
  const navigate = useNavigate()

  function handleNav(index: number) {
    setActive(index)
    navigate(`${pages[index].label}`)
  }
  const activeStyle = {
    opacity: 1
  }

  const links = pages.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      label={link.label}
      active={index === active}
      onClick={() => handleNav(index)}
    />
  ));

  return (

    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Navbar.Section mt={50}>
        <Stack justify="center" spacing={0}>
        <NavLink to="/" style={{
          textDecoration: "none",
        }}>
            {({ isActive }) => (
              <NavbarLink
            active={isActive}
            icon={IconHome2}
            label="Home"
              />
           
            )}
          </NavLink>
          <NavLink to="/projects" style={{
            textDecoration: "none",
          }}>
            {({ isActive }) => (
              <NavbarLink
            active={isActive}
            icon={IconDeviceDesktopAnalytics}
            label="Projects"
              />
           
            )}
          </NavLink>
         {/*  <NavLink to="/blog"
            
                style={{
            textDecoration: "none",
          }}>
            {({ isActive }) => (
              <NavbarLink
            active={isActive}
            icon={IconPencil}
            label="Blog"
       
              />
      
            )}
            
          </NavLink> */}
  <Box sx={{
    justifyItems: 'end'
  }}>

          <NavLgMenu/> 
  </Box>

        </Stack>
      </Navbar.Section>
      
      </MediaQuery>
  

  );
}