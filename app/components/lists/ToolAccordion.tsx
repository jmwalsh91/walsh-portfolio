import { Accordion } from "@mantine/core";

import React from "react";

type Props = {};

function ToolAccordion({}: Props) {
  return (
    <>
    <div style={{color: "rgb(0, 186, 234)",
height: 40,
width: 40}}/>
    <div style={{color: "lab(70.11, -22.32, -34.72)",
height: 40,
width: 40}}/>

    <Accordion defaultValue="customization" color="red">
    <Accordion.Item value="customization">
      <Accordion.Control>Customization</Accordion.Control>
      <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flexibility">
      <Accordion.Control>Flexibility</Accordion.Control>
      <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="focus-ring">
      <Accordion.Control>No annoying focus ring</Accordion.Control>
      <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
    </>
  );
}

export default ToolAccordion;
