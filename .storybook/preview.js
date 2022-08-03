import { MantineProvider } from "@mantine/core"
import {theme} from "../app/styles/theme.tsx"


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MantineProvider
    theme={theme}>
      <Story />
    </MantineProvider>
  )
]