import { Paper, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { IconColorSwatch, TablerIcon, TablerIconProps } from "@tabler/icons";
import { IconLeaf } from "@tabler/icons";
import React from "react";
import { theme } from "~/styles/theme";

type Props = {
  title: string;
  description: string;
};
interface IconGradient {
  deg: number;
  from: string;
  to: string;
}
export type RoleCardProps = {
  title: string,
  description: string,
  icon: TablerIconProps
  gradient: IconGradient;
};
function RoleCards({ title, description, icon, gradient }: RoleCardProps) {
  const theme = useMantineTheme();
  return (
    <Paper
      withBorder
      radius="md"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "saturate(200%) blur(16px) brightness(130%)",
        boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
        borderRadius: "14px",
   
        padding: "1rem",
      }}
    >
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={gradient}
      >
        {icon}
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md" color={theme.white}>
        {title}
      </Text>
      <Text size="md" mt="sm" align="left" color={theme.white}>
        {description}
      </Text>
    </Paper>
  );
}

export default RoleCards;
