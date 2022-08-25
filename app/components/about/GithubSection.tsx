import {
  createStyles,
  Image,  
  Title,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";


type Props = {};
const useStyles = createStyles((theme) => ({
  container : {
  [theme.fn.smallerThan('xl')]: {
    width: '50rem'
  },
  [theme.fn.smallerThan('lg')]: {
    width: '30rem'
  },
},


}));
function GithubSection({}: Props) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <>
      <Title
        sx={{
          color: theme.colors.primary[3],
          marginTop: "10rem",
          marginBottom: ".5rem",
        }}
        align="right"
      >
        Always be coding.
      </Title>
      <motion.div
        initial={{
          opacity: 0,
          border: `5px solid ${theme.colors.accent[8]}`,
        }}
        whileInView={{
          opacity: 1,
          border: `5px solid ${theme.colors.primary[5]}`,
        }}
        transition={{
          duration: 1.2,
          type: "tween",
        }}
        style={{
          maxWidth: "60rem",
       
          borderRadius: "1rem",
          padding: "1rem",
          border: `1px solid ${theme.colors.primary[5]}`,
          boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
          display: "flex",
          flexDirection: "column",
          marginBottom: "5rem",

        }}
        className={classes.container}
      >
        <motion.div
        initial={{
          opacity: 0,
          marginLeft: "-5rem",
        }}
        whileInView={{
          marginLeft: "1rem",
          opacity: 1,
        }}
        whileHover={{
          scale: 1.0
        }}
        transition={{
          duration: 1.2,
          type: "spring",
        }}
          style={{
        
            borderRadius: "1rem",
            padding: ".5rem",
            border: `2px solid ${theme.colors.primary[5]}`,
            boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
            width: "25rem",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            justifySelf: "start",
          }}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=jmwalsh91&amp;theme=react&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=true"
            alt="Shows github stats. Total stars, commits, pull requests, issues, and organizations commited to." width="25rem" height="100%"
          />
        </motion.div>
        <motion.div
        initial={{
          opacity: 0,
          marginRight: "-5rem",
          border: `5px solid ${theme.colors.accent[8]}`,
        }}
        whileInView={{
          marginRight: "1rem",
          opacity: 1,
          border: `5px solid ${theme.colors.primary[5]}`,
        }}
        whileHover={{
          scale: 1.02
        }}
        transition={{
          duration: 1.2,
          type: "tween",
        }}
          style={{
            borderRadius: "1rem",
            padding: "1rem",
            margin: "1rem",
            border: `1px solid ${theme.colors.primary[5]}`,
            boxShadow: `${theme.colors.primary[8]} 0px 4px 24px 0px`,
            width: "25rem",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignSelf: "flex-end",
          }}
        >
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=jmwalsh91&amp;theme=react&amp;hide_border=false"
          alt="Shows total contribution, current amount of days in a row where a contribution took place, and the length of the longest streak."
          width="25rem"
        />
        </motion.div>
      </motion.div>
    </>
  );
}

export default GithubSection;
