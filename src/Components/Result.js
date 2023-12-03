import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Result = ({mpdata}) => {
  
  const{
    homeValue,
    loanAmount,
    loanTerm,
    interestRate,
  } = mpdata

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate /100 /12;
  const monthlyPayment = 
  (loanAmount * interestPerMonth *(1+ interestPerMonth) ** totalLoanMonths) /
  ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Amount Paid',
        data: [homeValue, totalInterestGenerated.toFixed(2)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div>
      Monthly Payment: $ {monthlyPayment.toFixed(2)}
      <Pie data={pieChartData}/>
    </div>
    
    
  )
}

export default Result
