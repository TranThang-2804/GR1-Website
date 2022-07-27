import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Navbar />*/}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
