import React from 'react'
import {Global} from  '@mantine/core'
import Inter from 'public/assets/fonts/Inter-Black.woff2'
import InterRegular from 'public/assets/fonts/Inter-Regular.woff2'
import Cities_Typeface from 'public/assets/fonts/Cities_Typeface.ttf'

type Props = {}

function FontLoader({}: Props) {
  return (
    <Global 
    styles={[
        {
            '@font-face': {
              fontFamily: 'Inter Black',
              fontStyle:  'normal',
              fontWeight: '900',
              fontDisplay: 'swap',
              src: `url(${Inter}) format("woff2")`,

            },
        /*     '@font-face': {
              fontFamily: `'Cities Typeface', sans-serif`,
              src: `url(${Cities_Typeface}), format ('truetype')`,
              fontWeight: 'normal',
              fontStyle: 'normal',

            }, */
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontStyle:  'regular',
            fontWeight: '500',
            fontDisplay: 'swap',
            src: `url(${InterRegular}) format("woff2")`,

          },
        }
    ]}/>
  )
}

export default FontLoader