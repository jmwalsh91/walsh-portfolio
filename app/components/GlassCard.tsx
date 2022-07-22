import { Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function GlassCard({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
        x: -100,
        scale: .7
    }}
    animate={{
        opacity: .85,
        x: 0,
        scale: 1,
        transition: {
            duration: 1
        } 
    }}
    whileHover={{ scale: 1.02,
        opacity: .95,
    transition: {
        duration: .2
    } }}
    >
      <Paper
        sx={(theme) => ({
          boxSizing: "border-box",
          width: "350px",
          height: "350px",
          background:
            "linear-gradient(70.46deg, rgba(116, 255, 255, 0.375) 12.34%, rgba(117, 164, 164, 0.75) 54.81%, rgba(250, 244, 194, 0.345) 93.35%)",
          backdropFilter: "blur(28px)",
          borderRadius: "26px",
          transform: "rotate(-42.82deg)",
          display: 'flex',
          zIndex: 3,
          border:'3px solid pink'

        })}
      >
        <Text
        sx={(theme) => ({
            marginTop: "5.5rem",
            marginLeft: "1rem",
            fontSize: '5rem',
            transform: "rotate(42.82deg)",
            color: "pink"
         
        })}>Projects</Text>
      </Paper>
    </motion.div>
  );
}

export default GlassCard;
