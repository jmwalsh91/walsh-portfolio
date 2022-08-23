import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Footer, Group } from '@mantine/core';
import type {
  TablerIcon} from '@tabler/icons';
import {
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
import { useNavigate } from '@remix-run/react';
import { useMediaQuery } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({
  link: {
    width: '4rem',
    height: '4rem',
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.colors.indigo[5] }).background,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.colors.secondary[5] }).background,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const pages = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconDeviceDesktopAnalytics, label: 'Projects' },
  { icon: IconPencil, label: 'blog'},
  { icon: IconCalendarStats, label: 'Calendar' },
  { icon: IconUser, label: 'About' },
];



export default function BottomNav() {
  const [active, setActive] = useState(2);
  const navigate = useNavigate()
  const notPhone = useMediaQuery('(min-width: 900px)');
  function handleNav(index: number) {
    setActive(index)
    navigate(`${pages[index].label}`)
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
  <>

 
<Group>
      <Navbar.Section mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
</Group>
     

  </>

  );
}