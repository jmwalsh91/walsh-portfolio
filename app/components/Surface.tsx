import { BackgroundImage, Paper, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import React from "react";

type Props = {
};

function Surface({}: Props) {
  const theme = useMantineTheme();
  return (
    <Paper
      shadow="xl"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "saturate(200%) blur(16px)",
        opacity: 0.8,
        width: "450px",
        height: "450px",
        borderRadius: "14px",
        marginY: "1rem",
        boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
      }}
    >
      <Title
        sx={{
          color: theme.white,
        }}
      >
       Jordan Walsh
      </Title>
     <Text component="h2">
       React Developer || UI Engineer 
    </Text>
    </Paper>
  );
}

export default Surface;
