import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import { theme } from '~/styles/theme';
import { motion } from 'framer-motion';
import { useNavigate } from '@remix-run/react';
const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface LeadingProjectProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export function LeadingProject({ image, title, category, description }: LeadingProjectProps) {
  const navigate = useNavigate()
  const { classes } = useStyles();
  const theme = useMantineTheme()

  const handleOpenProject = () => {
    navigate(`${title}`)
  }
  return (
    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Text align='right' color={theme.white}>{description}</Text>
      <Button variant="white" color="dark" sx={{
        alignSelf: 'end'
      }}
      onClick={()=>{
        handleOpenProject()
      }}>
        Learn more
      </Button>
    </Paper>
  );
}