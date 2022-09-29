import Navbar from "./components/navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
 
  return (
    <div className="scroll-smooth">
    <div>
      <Navbar />
    </div>
    <div>
      <Body />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
}

export default App;
