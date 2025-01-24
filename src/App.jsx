import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
}

export default App;
