import { BackgroundImage, MantineProvider } from "@mantine/core"
import {theme} from "../app/styles/theme.tsx"
import Backdrop from "../app/components/layouts/Backdrop"


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
      <Backdrop>

      <Story />
      </Backdrop>
    </MantineProvider>
  )
]