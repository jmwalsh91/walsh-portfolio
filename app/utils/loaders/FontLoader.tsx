import React from 'react'
import {Global} from  '@mantine/core'
import base from '~/assets/fonts/smokingWoff/SmokingTypefaceBase.woff'
import withShadow from '~/assets/fonts/smokingWoff/SmokingTypefaceFull.woff'



type Props = {}

function FontLoader({}: Props) {
  return (
    <Global 
    styles={[
        {
            '@font-face': {
              fontFamily: 'Smoking Typeface',
              src: `url('${base}') format("woff")`,
              fontWeight: 700,
              fontStyle: 'normal',
              fontVariant: "base"
            },
        },
        {
            '@font-face': {
                fontFamily: 'Smoking Typeface',
                src: `url('${withShadow}') format("woff")`,
                fontWeight: 700,
                fontStyle: 'normal',
                fontVariant: "withShadow"
              },
        },
      
    ]}/>
  )
}

export default FontLoader