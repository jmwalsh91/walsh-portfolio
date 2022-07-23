import { Center, Container } from '@mantine/core'
import React from 'react'
import { ImageActionBanner } from '~/components/ImageActionBanner'
import portrait from '~/assets/bluepinkportrait.jpg'
type Props = {}

function index({}: Props) {
  return (
    <Container>

    <Center>
        <ImageActionBanner sx={{
            width: '600px'
        }} title={'blog'} description={'blog'} image={portrait} action={{
            label: '',
            link: ''
        }}/>
    <div>This blog</div>
    </Center>
        </Container>
  )
}

export default index