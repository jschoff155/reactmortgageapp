import React from "react";
import Slidercomponent from "./Common/slidercomponent";

const SliderSelect = ({mpdata, setmpdata}) => {
    return (
    <>
      <Slidercomponent 
      title={"Home Value"}
      min={50000} 
      max={500000} 
      defaultValue={mpdata.homeValue}
      value={mpdata.homeValue}
      step={5000}
      unit='$'
      amount={mpdata.homeValue}
      onChange={(e, value) => setmpdata({
        ...mpdata,
        downPayment: value * .03,
        loanAmount: value * .97,
        homeValue: value})}
       />
       
       <Slidercomponent 
      title={"Down Payment - Minimum 3% downpayment required"}
      min={0} 
      max={mpdata.homeValue} 
      defaultValue={mpdata.downPayment}
      value={mpdata.downPayment}
      step={1000}
      unit='$'
      amount={mpdata.downPayment}
      onChange={(e, value) => setmpdata({
        ...mpdata,
        loanAmount: (mpdata.homeValue - value),
        downPayment: value,})}
       />

       <Slidercomponent 
      title={"Loan Amount"}
      min={0} 
      max={mpdata.homeValue} 
      defaultValue={mpdata.loanAmount}
      step={1000}
      unit='$'
      amount={mpdata.loanAmount}
      onChange={(e, value) => setmpdata({
        ...mpdata,
        downPayment: (mpdata.homeValue-value),
        loanAmount: value})}
       />

       <Slidercomponent 
      title={"Interest Rate"}
      min={0} 
      max={18} 
      defaultValue={mpdata.interestRate}
      step={.125}
      unit='%'
      amount={mpdata.interestRate}
      onChange={(e, value) => setmpdata({
        ...mpdata,
        interestRate: value})}
       />
    </>
  );
};

export default SliderSelect;
