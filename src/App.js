import Navbar from "./Components/Navbar";
import TenureSelection from "./Components/TenureSelection";
import Result from "./Components/Result";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./Components/SliderSelect";
import { useState } from "react";

function App() {

  
  const [homeValue, setHomeValue] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [loanTerm, setLoanTerm] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing = {20}>
          <Grid item xs= {12} md={6}>
            <SliderSelect />
            <TenureSelection />
          </Grid>
          <Grid item xs= {12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
