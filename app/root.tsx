import type { ColorScheme } from "@mantine/core";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import Shell from "./components/Shell";
import FontLoader from "./utils/loaders/FontLoader";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ overflowY: "hidden" }}>
        <MantineTheme>
          <Shell>
            <Outlet />
          </Shell>
        </MantineTheme>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <FontLoader />
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          colors: {
            primary: [
              "#d7fdff",
              "#aaf0ff",
              "#7ae6ff",
              "#48daff",
              "#1ad0ff",
              "#00b6e6",
              "#008eb4",
              "#006582",
              "#003e50",
              "#001620",
            ],
            secondary: [
              "#ffe2ff",
              "#ffb1ff",
              "#ff7fff",
              "#ff4cff",
              "#ff1aff",
              "#e600e5",
              "#b400b3",
              "#810080",
              "#4f004e",
              "#1e001d",
            ],
            accent: [
              "#fffbda",
              "#fff4ad",
              "#ffee7d",
              "#ffe64b",
              "#ffe01a",
              "#e6c600",
              "#b39a00",
              "#806e00",
              "#4d4200",
              "#1c1600",
            ],
            success: [
              "#d9fff3",
              "#acffe0",
              "#7cffcb",
              "#4affb8",
              "#1affa4",
              "#00e68a",
              "#00b36b",
              "#00804c",
              "#004e2c",
              "#001c0b",
            ],
            purple: [
              "#f1e3ff",
              "#d1b2ff",
              "#b180ff",
              "#924dff",
              "#731bfe",
              "#5902e5",
              "#4600b3",
              "#320081",
              "#1e004f",
              "#0b001f",
            ],
          },
          other: {
            accent: "#ffd11a",
          },
          primaryColor: "primary",
          primaryShade: 5,
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Shell fixed position={{ top: 0, left: 0 }}>
          <Outlet />
        </Shell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
