import { Center, Paper } from "@mantine/core";
import React, { ReactChildren } from "react";

type Props = {
    children: ReactChildren
};

function Backdrop({children}: Props) {
  return (
    <Paper
      sx={{
        padding: '4rem',
        width: "100vw",
        height: "100vh",
        background: 'rgb(19,17,28)',
        backgroundImage:'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), none'
      }}

    >
        <Center>
            {children}
            </Center>
    </Paper>
  );
}

export default Backdrop;
