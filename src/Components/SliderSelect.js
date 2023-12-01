import React from 'react'
import Slidercomponent from './Common/slidercomponent'

const SliderSelect = () => {
  return (
    <>
      <Slidercomponent min={10} max={80} defaultValue={50}/>
      <Slidercomponent min={20} max={90} defaultValue={30}/>
      <Slidercomponent min={30} max={100} defaultValue={60}/>
    </>
  )
}

export default SliderSelect
