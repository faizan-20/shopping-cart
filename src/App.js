import { Route, Routes } from "react-router-dom";
import "./input.css"
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
