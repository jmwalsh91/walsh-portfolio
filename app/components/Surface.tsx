import { BackgroundImage, Paper, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import React from "react";

type Props = {
    children: React.ReactNode
};

function Surface({children}: Props) {
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

{children}
    </Paper>
  );
}

export default Surface;
