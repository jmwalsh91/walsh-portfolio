import {
  Anchor,
  Button,
  Container,
  createStyles,
  Divider,
  Drawer,
  Footer,
  Group,
  Space,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { Link, NavLink, useNavigate } from "@remix-run/react";
import {
  IconBookDownload,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBriefcase,
  IconDeviceDesktopAnalytics,
  IconHome2,
  IconMailOpened,
  IconPencil,
} from "@tabler/icons";
import React, { useState } from "react";
import CopyEmail from "./buttons/CopyEmail";
import ExternalLinkButton from "./buttons/ExternalLink";
import Nav, { NavbarLink, NavbarLinkProps, pages } from "./Nav";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const useStyles = createStyles((theme) => ({
  link: {
    width: "100%",
    height: "3rem",
    borderRadius: theme.radius.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,
    textDecoration: "none",

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.colors.indigo[5] })
          .background,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      textDecoration: "none",
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({
       
          variant: "filled",
          color: theme.colors.secondary[5],
        }).background,
        0.15
      ),
    },
  },
}));
export function SmNavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
   <Button
   variant="subtle"
   size="xl"
   className={cx(classes.link, { [classes.active]: active })}
        onClick={onClick}
        
      >
        <Icon size={20} stroke={2} /><Text>{label}</Text>
</Button>
  );
}
export default function XsNav({ opened, setOpened }: Props) {
  const theme = useMantineTheme();
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  function handleNav(index: number) {
    setActive(index);
    navigate(`${pages[index].label}`);
  }
  const activeStyle = {
    opacity: 1,
  };

  return (
    <>
      <Drawer
        aria-label="Navigation Dialog"
        closeButtonLabel="Close Dialog"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        padding="xl"
        size="xs"
      >
        <NavLink to="/" style={{
          textDecoration: "none"
        }}>
          {({ isActive }) => (
            <SmNavbarLink active={isActive} icon={IconHome2} label="Home" />
          )}
      
        </NavLink>
        <NavLink to="/projects"
        style={{
          textDecoration: "none"
        }}>
          {({ isActive }) => (
            <SmNavbarLink
              active={isActive}
              icon={IconDeviceDesktopAnalytics}
              label="Projects"
            />
          )}
        </NavLink>
        <NavLink to="/blog"
        style={{
          textDecoration: "none"
        }}>
          {({ isActive }) => (
            <SmNavbarLink active={isActive} icon={IconPencil} label="Blog" />
          )}
        </NavLink>
<Divider/> 
        <Text>Social</Text>
        <Button
          variant="subtle"
          size="lg"
          component="a"
          href="https://github.com/jmwalsh91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={20} /> Github
        </Button>
        <Button variant="subtle" size="lg">
          <IconBrandLinkedin size={20} /> LinkedIn
        </Button>
        <Button variant="subtle" size="lg">
          <IconBrandMastodon size={20} /> Mastodon
        </Button>

        <CopyEmail />

        <Divider />
        <Text>Resources</Text>

        <Button variant="subtle" size="lg">
          <IconBookDownload size={20} /> Resume
        </Button>
        <Button variant="subtle" size="lg">
          <IconBriefcase size={20} /> Doc Kit
        </Button>
      </Drawer>
      <Group position="center"></Group>
    </>
  );
}
