import { Avatar, Box, Button, Card, CardSection, createStyles, Group, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import React from 'react'
import { theme } from '~/styles/theme';

type Props = {}


  
  interface UserCardImageProps {
    image: string;
    avatar: string;
    name: string;
    job: string;
    stats: { label: string; value: string }[];
  }

export function ProfileCard({ image, avatar, name, job, stats }: UserCardImageProps) {
const theme = useMantineTheme();
  
    const items = stats.map((stat) => (
      <div key={stat.label}>
        <Text align="center" size="lg" weight={500}>
          {stat.value}
        </Text>
        <Text align="center" size="sm" color="dimmed">
          {stat.label}
        </Text>
      </div>
    ));
  
    return (

   
      <Card withBorder p="xl" radius="md" sx={{
        height: "100%",
        backdropFilter: "saturate(200%) blur(16px) brightness(130%)",
        boxShadow: "rgba(132, 59, 206, 0.15) 0px 4px 24px 0px",
        width: "100%",
    
   backgroundColor: "rgba(14, 20, 20, 0)"
      }} >
       <Avatar src={avatar} size={220} radius={220} />


      </Card>
   

  
    );
  }
  