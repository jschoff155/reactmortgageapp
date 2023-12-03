import Navbar from "./Components/Navbar";
import TenureSelection from "./Components/TenureSelection";
import Result from "./Components/Result";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./Components/SliderSelect";
import { useState } from "react";

function App() {

  
  const [mpdata, setmpdata] = useState(
    {
    homeValue: 50000,
    downPayment: 25000,
    loanAmount: 25000,
    loanTerm: 10,
    interestRate: 5,
  });

  

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing = {20}>
          <Grid item xs= {12} md={6}>
            <SliderSelect mpdata={mpdata} setmpdata={setmpdata} />
            <TenureSelection mpdata={mpdata} setmpdata={setmpdata}/>
          </Grid>
          <Grid item xs= {12} md={6} alignItems={'center'}>
            <Result mpdata={mpdata}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
