import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Error from "./layout/Error";
import Dash from "./layout/Dash";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="dash" element={<Dash />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
