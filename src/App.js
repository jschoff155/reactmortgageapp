import Navbar from "./Components/Navbar";
import Slidercomponent from "./Components/Common/slidercomponent";
import TenureSelection from "./Components/TenureSelection";
import Result from "./Components/Result";
import { Container } from "@mui/material";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="xl">
      <Slidercomponent/>
      <TenureSelection/>
      <Result/>
      </Container>
    </div>
  );
}

export default App;
