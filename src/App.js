import "./css/layout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import SearchResult from "./components/Search/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:type/:id" component={Detail} element={<Detail />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
