import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages";
import {TestPage} from "./pages"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
