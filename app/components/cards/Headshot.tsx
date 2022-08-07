import { Container, Image } from '@mantine/core'
import React from 'react'

type Props = {}

function Headshot({}: Props) {
  return (
      <Container sx={{
    clipPath: "circle(40% at 50% 50%);",
  borderRadius: "90%",
 
   
}}
>
    <div style={{
         borderRadius: "90%",
         boxShadow: "rgba(132, 59, 206, 1) 100px 100px 100px 100px",
    
         backdropFilter: "saturate(200%) blur(90%) brightness(110%)",
    }}>

    <Image

src="https://qkdyjypdpruelatqkwbh.supabase.co/storage/v1/object/public/portfolio/profile2crop.jpg?t=2022-08-05T03%3A46%3A56.547Z" 
alt="portrait"
sx={{
    
}}
/>
</div>
</Container>
          
  )
}

export default Headshot