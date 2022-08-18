import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import DesignTime from "./js/Pages/Designer";
import RunTime from "./js/Pages/RunTime";
import Homepage from "./js/Pages/Homepage";
import Embed from "./js/Pages/Embed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/design" element={<DesignTime />} />
          <Route path="/interact" element={<RunTime />} />
          <Route path="/embed" element={<Embed />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        {/* <Button>Hey</Button>
        <Link to = "/design"><button id="design"> Design</button></Link>
        <Link to = "/interact"><button id="interact"> interact</button></Link>
        
          <div className="App">
              
          </div> */}
      </Router>
    </>
  );
}

export default App;
