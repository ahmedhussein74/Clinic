import "./style/App.css";
import Home from "./components/Home";
import Appoinment from "./components/Appoinment";
import Message from "./components/Message";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Home />
      <Appoinment />
      <Pricing />
      <Message />
      <Footer />
    </>
  );
}

export default App;
