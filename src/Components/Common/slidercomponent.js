import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const Slidercomponent = ({defaultValue, min, max, step, onChange, value, title, unit, amount}) => {
  return (
    <div>
    <Stack my={3}>
    <Stack gap={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <Slider 
      defaultValue={defaultValue} 
      min={min} 
      max={max} 
      aria-label="Default" 
      valueLabelDisplay="auto"
      marks
      step={step}
      onChange={onChange}
      value={value}
       />
       <Stack gap={2} direction="row" justifyContent='space-between' color='text.secondary'>
      <Typography variant="subtitle" >{unit}{min}</Typography>
      <Typography variant="subtitle">{unit}{max}</Typography>
      </Stack>
    </Stack>
    </div>
  )
}

export default Slidercomponent
