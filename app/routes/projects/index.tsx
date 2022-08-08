import React from 'react'
import GlassCard from '~/components/GlassCard'
import Backdrop from '~/components/layouts/Backdrop'
import ProjectGrid from '~/components/layouts/ProjectGrid'

type Props = {}

function index({}: Props) {
  return (
    
    <Backdrop>
      <ProjectGrid/>
    </Backdrop>
  )
}

export default index