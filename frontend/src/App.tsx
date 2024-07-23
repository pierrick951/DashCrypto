import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={} />
        <Route path="*" element={} /> */}
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
  )
}

export default App
