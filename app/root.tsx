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
      <body>
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
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          colors: {
            'primary':  [
                "#defdfd",
                "#bbf2f1",
                "#95e7e7",
                "#6ededd",
                "#49d4d3",
                "#31bbb9",
                "#219190",
                "#136867",
                "#003f3f",
                "#001717",
              ],
          },
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Shell>
          <Outlet />
        </Shell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
