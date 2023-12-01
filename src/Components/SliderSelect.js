import React from "react";
import Slidercomponent from "./Common/slidercomponent";

const SliderSelect = () => {
  return (
    <>
      <Slidercomponent 
      title={"Home Value"}
      min={50000} 
      max={500000} 
      defaultValue={0}
      step={5000}
      unit='$'
      amount={4000}
       />
       <Slidercomponent 
      title={"Down Payment"}
      min={0} 
      max={50000} 
      defaultValue={0}
      step={1000}
      unit='$'
      amount={1000}
       />
       <Slidercomponent 
      title={"Loan Amount"}
      min={0} 
      max={50000} 
      defaultValue={0}
      step={1000}
      unit='$'
      amount={5000}
       />
    </>
  );
};

export default SliderSelect;
