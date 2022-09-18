import "./css/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainSearch />
        <Routes>
          <Route path="/" element={<List type="movie" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
