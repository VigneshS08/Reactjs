import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Includes/Layout";
import Home from "./LivoLab/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
