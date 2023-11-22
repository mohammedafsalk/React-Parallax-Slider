import "./index.css";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Samples } from "./components/Samples";

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar/>
      {/* <Samples/> */}
      <Slider/>
    </>
  );
}

export default App;
