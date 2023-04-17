import "./css/App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Your application's components go here */}
        <Routes>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" element={<Login/>}  />
          <Route path="/home" element={<HomePage/>} exact />
          {/* <Route path="/calendar" element={<Drone/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
