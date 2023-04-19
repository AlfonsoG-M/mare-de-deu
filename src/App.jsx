import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themeConfig";
import Home from "./components/page/Home/Home";
import Bautismo from "./components/page/Bautismo/Bautismo";
import Sacramentos from "./components/page/Sacramentos/Sacramentos";
import Matrimonio from "./components/page/Matrimonio/Matrimonio";
import Reconciliacion from "./components/page/Reconciliacion/Reconciliacion";
import Uncion from "./components/page/Uncion/Uncion";
import Talleres from "./components/page/Talleres/Talleres";
import FormacionCristiana from "./components/page/FormacionCristiana/FormacionCristiana";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home/>} />
            <Route path="/mare-de-deu" element={<h1>Mare de deu</h1>} />
            <Route path="/quienes-somos" element={<h1>quienes-somos</h1>} />
            <Route path="/contacto" element={<h1>contacto</h1>} />
            <Route path="/horarios" element={<h1>horarios</h1>} />
            <Route path="/espiritualidad" element={<h1>espiritualidad</h1>} />
            <Route path="/lectio" element={<h1>lectio</h1>} />
            <Route path="/novena" element={<h1>novena</h1>} />
            <Route path="/sacramentos" element={<Sacramentos/>} />
            <Route path="/bautismo" element={<Bautismo/>} />
            <Route path="/matrimonio" element={<Matrimonio/>} />
            <Route path="/reconciliacion" element={<Reconciliacion/>} />
            <Route path="/uncion" element={<Uncion/>} />
            <Route path="/comunidad" element={<h1>comunidad</h1>} />
            <Route path="/talleres" element={<Talleres/>} />
            <Route
              path="/formacion-cristiana"
              element={<FormacionCristiana/>}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
