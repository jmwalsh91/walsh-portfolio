import { BackgroundImage, Paper, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import React from "react";

type Props = {
    width?: string | number
    height?: string | number
    children: React.ReactNode
};

function Surface({children, width, height}: Props) {
  const theme = useMantineTheme();
  const w = width? width : 450
  const h = height? height : 450

  return (
    <Paper
      shadow="xl"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "saturate(200%) blur(16px) brightness(130%)",
        width: w,
        height: h,
        opacity: 0.8,
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
