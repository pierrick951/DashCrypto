import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./layout/Home";
import Error from "./layout/Error";
import Dash from "./layout/Dash";
import Wallet from "./layout/Wallet";
import MainLayout from "./layout/MainLayout";
import News from "./layout/News";

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="home" element={<Home/>} />
            <Route path="dash" element={<Dash/>} />
            <Route path="news" element={<News/>} />
            <Route path="wallet" element={<Wallet/>} />
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
