import { Paper, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function GlassCard({}: Props) {
  return (
    <motion.div 
    whileHover={{ scale: 1.1,
      
        x: 10,
        y: -10,
    
    transition: {
        duration: .3
    } }}
    >
      <Paper
        sx={(theme) => ({
          boxSizing: "border-box",
          width: "342.62px",
          height: "358.38px",
          background:
            "linear-gradient(70.46deg, rgba(116, 255, 255, 0.375) 12.34%, rgba(117, 164, 164, 0.75) 54.81%, rgba(250, 244, 194, 0.345) 93.35%)",
          backdropFilter: "blur(28px)",
          borderRadius: "26px",
          transform: "rotate(-42.82deg)",
          display: 'flex',
          opacity: "75%"
        })}
      >
        <Text
        sx={(theme) => ({
            marginTop: "3rem",
            marginLeft: "1rem",
            fontSize: '5rem',
            transform: "rotate(42.82deg)",
         
        })}>Projects</Text>
      </Paper>
    </motion.div>
  );
}

export default GlassCard;
