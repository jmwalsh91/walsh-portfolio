

import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt, IconBrandLinkedin } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  email: string;
}

export function SmallBio({ avatar, name, title, email }: UserInfoIconsProps) {
    const { classes } = useStyles();
    return (
      <div>
        <Group noWrap>
          <Avatar src={avatar} size={116} radius="md" />
        {/*   <div>
            <Text size="lg" weight={500} className={classes.name}>
              {name}
            </Text>
            <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
              {title}
            </Text>
  
  
            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {email}
              </Text>
            </Group>
  
            <Group noWrap spacing={10} mt={5}>
              <IconBrandLinkedin>LinkedIn</IconBrandLinkedin>
            </Group>
          </div> */}
        </Group>
      </div>
    );
  }