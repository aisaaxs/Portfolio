import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Wordle from "./components/Projects/Games/Wordle";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}

        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/wordle" element={<Wordle />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;