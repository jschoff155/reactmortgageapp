import Navbar from "./Components/Navbar";
import TenureSelection from "./Components/TenureSelection";
import Result from "./Components/Result";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./Components/SliderSelect";

function App() {
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
