import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.page";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-2">
      
      <header>
        <h1>BomSLap - React</h1>
      </header>

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </main>

      <footer>
        footer
      </footer>

    </div>
  );
}

export default App;