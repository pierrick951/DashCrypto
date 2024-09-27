import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Error from "./layout/Error";
import Dash from "./layout/Dash";
import MainLayout from "./layout/MainLayout";
import Governance from "./layout/Governance";
import Loan from "./layout/Loan";
import Vault from "./layout/Vault";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="dash" element={<Dash />} />
              <Route path="loan" element={<Loan />} />
              <Route path="vault" element={<Vault />} />
              <Route path="governance" element={<Governance/>} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
