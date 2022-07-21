import React from 'react'
import { ImageActionBanner } from '~/components/ImageActionBanner'

type Props = {}

function index({}: Props) {
  return (
    <div>
        <ImageActionBanner title={'blog'} description={'blog'} image={''} action={{
              label: '',
              link: ''
          }}/>
    <div>This blog</div>
    </div>
  )
}

export default index