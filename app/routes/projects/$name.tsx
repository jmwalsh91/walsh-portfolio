import {
  Badge,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useLogger } from "@mantine/hooks";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

import { Project, sb } from "~/services/sb";

type Props = {};
const tech = [
  "react",
  "typescript",
  "node",
  "express",
  "MUI",
  "Tone.js",
  "Tonal.js",
];

export const loader: LoaderFunction = async ({ request, params }) => {
  const thing = await sb.getProjectByProjectName(
    params.name as Project["project_name"]
  );
  return json(thing);
};
function $name({}: Props) {
  const theme = useMantineTheme();
  const data = useLoaderData();
  useLogger("$name", [data]);
  return (
    <>
      <Container size="md" mb={"4rem"}>
                <Container size="md">

        <Title order={1} align="end" mt={"3rem"} mb={".5rem"}>
          {data[0].project_name}
        </Title>
     
              <Title order={3} align="end" mb=".5rem"> 
                {data[0].card_text}
                
                </Title>
            <Image
              src={data[0].mockup}
              alt={data[0].project_name}
              sx={{
                border: "1px solid rgba(132, 59, 206, .4)",
                boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                maxWidth: "50rem",
                margin: "0 auto",
              }}
              />
            Built with:
            {data[0].stack_badges.map((item: string) => (
              <Badge key={item}>{item}</Badge>
              ))}
              </Container>
            <Stack>
      
 
      
   
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1rem",
                  border: "1px solid rgba(132, 59, 206, .4)",
                  boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
                }}
              >
                <Text>{data[0].description}</Text>
              </div>
            </Stack>
    
      </Container>
    </>
  );
}

export default $name;
