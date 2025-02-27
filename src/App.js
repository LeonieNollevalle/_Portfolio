import {
	Routes,
  Route,
} 
from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {

  return (
    <div>
  <Routes>
    <Route path="/work/:id" element={<Work />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
    </div>
  );
}

export default App;
