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
      <body style={{overflowY: 'hidden'}}>
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
      <FontLoader/> 
      <MantineProvider
        theme={{
          headings: {
            fontFamily: 'Smoking Typeface'
          },
          colorScheme: colorScheme,
          colors: {
            'primary': [
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
            'secondary': [
              "#ffe3fd",
              "#f8b2ff",
              "#ec80ff",
              "#f04efe",
              "#fa1ffd",
              "#e409db",
              "#b2039e",
              "#800068",
              "#4e003b",
              "#1e0015",
            ],
            'accent': [
              "#fffada",
              "#fff0ad",
              "#ffe67d",
              "#ffdb4b",
              "#ffd11a",
              "#e6b800",
              "#b38f00",
              "#806600",
              "#4e3d00",
              "#1d1400",
            ],
            'success': [
              "#e0fdf3",
              "#baf2dc",
              "#94e9c3",
              "#6bdfa7",
              "#43d68a",
              "#29bc7a",
              "#1d9266",
              "#11684e",
              "#044033",
              "#00170e",
            ],
         
          },
          other: {
            accent: "#ffd11a",
          },
          primaryColor: 'primary',
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
