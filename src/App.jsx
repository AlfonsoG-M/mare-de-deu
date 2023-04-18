import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/quienes-somos" element={<h1>quienes-somos</h1>} />
          <Route path="/contacto" element={<h1>contacto</h1>} />
          <Route path="/horarios" element={<h1>horarios</h1>} />
          <Route path="/lectio" element={<h1>lectio</h1>} />
          <Route path="/novena" element={<h1>novena</h1>} />
          <Route path="/bautismo" element={<h1>bautismo</h1>} />
          <Route path="/matrimonio" element={<h1>matrimonio</h1>} />
          <Route path="/reconciliacion" element={<h1>reconciliacion</h1>} />
          <Route path="/uncion" element={<h1>uncion</h1>} />
          <Route path="/talleres" element={<h1>talleres</h1>} />
          <Route
            path="/formacion-cristiana"
            element={<h1>formacion-cristiana</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
