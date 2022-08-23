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
  
    
  
    return (

   


       <Avatar src={avatar} size={220} radius={220} />



   

  
    );
  }
  