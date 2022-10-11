import {
  Anchor,
  Button,
  createStyles,
  Divider,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconBookDownload,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBriefcase,
  IconExternalLink,
} from "@tabler/icons";
import React from "react";
import { plausible } from "~/root";
import CopyDiscord from "./buttons/CopyDiscord";
import CopyEmail from "./buttons/CopyEmail";

type Props = {};
const useStyles = createStyles((theme) => ({
  link: {
    width: "4rem",
    height: "4rem",
    borderRadius: theme.radius.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.colors.purple[5],
    },
  },
}));

function NavLgMenu({}: Props) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  return (
    <Menu
      position="right-start"


      openDelay={100}
      closeDelay={500}
      closeOnEscape
      closeOnItemClick={false}
      shadow="md"
      width={200}
      aria-label="Menu with links, resume, and contact info"
     
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.link)}
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: theme.radius.md,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.85,
          }}
        >
          <IconExternalLink size={30} stroke={1.5} />
          <Text>More</Text>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Links</Menu.Label>
        <Menu.Item
          icon={<IconBrandGithub size={14} aria-label="Jordan's Github" />}
        >
          <Anchor
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jmwalsh91"
            sx={{
              color: theme.colors.gray[5],
              textDecoration: "none",
            }}
          >
            Github
          </Anchor>
        </Menu.Item>
        <Menu.Item
          icon={<IconBrandLinkedin size={14} aria-label="Jordan's LinkedIn" />}
        >
          <Anchor
            component="a"
            href="https://linkedin.com/in/jmwalshdev"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.colors.gray[5],
              textDecoration: "none",
            }}
          >
            LinkedIn
          </Anchor>
        </Menu.Item>

        <Menu.Divider />
        <Menu.Label>Downloads</Menu.Label>

        <Menu.Item
          component="a"
          style={{
            textDecoration: "none",
          }}
          download
          href="/docs/WalshResume.pdf "
          onClick={() => plausible.trackEvent("Resume")}
          icon={<IconBookDownload size={14} aria-label="Jordan's Resume" />}
        >
          Resume
        </Menu.Item>
        <Menu.Item
          component="a"
          style={{
            textDecoration: "none",
          }}
          download
          href="/docs/WalshCVKit.pdf "
          onClick={() => plausible.trackEvent("CV Kit")}
          icon={
            <IconBriefcase
              size={14}
              aria-label="Jordan's Resume and other resources"
            />
          }
        >
          Resume + Recommendations
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          sx={{
            alignItems: "start",
            justifyContent: "start",
          }}
          aria-label="Copy email address to clipboard"
        >
          <CopyEmail />
        </Menu.Item>
        <Menu.Item aria-label="Copy discord tag to clipboard">
          <CopyDiscord />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavLgMenu;
