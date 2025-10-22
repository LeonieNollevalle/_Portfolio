import {
	Routes,
  Route,
} 
from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Nav from "./pages/Navi.jsx";

function App() {

  return (
    <div>
      <Nav/>
  <Routes>
  <Route exact path="/contact" element={<Contact />} />
    <Route path="/work/:id" element={<Work />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
    </div>
  );
}

export default App;
