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

export const meta: MetaFunction = () => {
  const description = `Jordan Walsh is a full-stack web developer with a passion for building clean, performant, and accessible web applications with React and Typescript. Get in touch to collaborate or discuss opportunities.`
  return {
    viewport: "width=device-width,initial-scale=1",
    charset: "utf-8",
  title: "Walsh Portfolio",
  description,
  keywords: [
    "web",
    "developer",
    "react",
    "typescript",
    "javascript",
    "node",
    "UI Engineer",
    "React",
    "Freelance",
    "Full-Stack",
    "Contractor",
    "Web3",
    "Design",
  ],
  "og:url" : "https://jmwalsh.dev",
  "og:type" : "website",
  "og:title" : "Walsh Portfolio",
  "twitter:card" : "summary_large_image",
"twitter:domain" : "jmwalsh.dev",
 "twitter:url" : "https://jmwalsh.dev",
  "twitter:title" : "Walsh Portfolio",
  "twitter:description" : "Jordan Walsh is a full-stack web developer with a passion for building clean, performant, and accessible web applications with React and Typescript. Get in touch to collaborate or discuss opportunities.",
  "twitter:image" : "/assets/pics/ogimg.webp",
  }
};


export default function App() {
  return (
    <html lang="en" style={{overflow: "none"}}>
      <head>
        <Meta />
        <Links />
        <script defer data-domain="jmwalsh.dev" src="https://plausible.io/js/plausible.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"></meta>
<meta name="image" property="og:image" content="https://jmwalsh.dev/assets/pics/ogimg.webp"/>

<meta name="description" property="og:description" content="Jordan Walsh is a full-stack web developer with a passion for building clean, performant, and accessible web applications with React and Typescript. Get in touch to collaborate or discuss opportunities!"/>
      </head>
      <body style={{ overflow: "hidden", scrollbarWidth: "none" }}>
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
          fontFamily: "Inter",
          headings: { 
            fontFamily: "Inter Black",
            fontWeight: 900,
          }
        }}
        withNormalizeCSS
        withGlobalStyles
        
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
