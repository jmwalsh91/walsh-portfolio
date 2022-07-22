import { Button, Slider, ThemeIcon, useMantineTheme } from "@mantine/core";
import Nav from "~/components/Nav";

export default function Index() {
  const theme = useMantineTheme()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Button color="accent">Hi</Button>
      <Slider
      sx={{width: '300px'}}
      color={"secondary"}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </div>
  );
}
