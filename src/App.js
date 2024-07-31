import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

/*import home_page_light from "./images/Home-Page-Light.png";
import home_page_dark from "./images/Home-Page-Dark.png";*/

import HomePage from "./components/HomePage/HomePage";

function App() {
  const [useDarkMode, setUseDarkMode] = useState(true);

  return (
    <div className={`w-screen h-screen ${useDarkMode ? 'bg-black' : 'bg-white'} flex flex-col`}>
      <Navbar useDarkMode={useDarkMode} setUseDarkMode={setUseDarkMode} />

      <HomePage useDarkMode={useDarkMode} />
      
      {/*<section className="w-full flex items-center justify-center pt-[50px] absolute top-[70px] left-0">
        <img src={useDarkMode ? home_page_dark : home_page_light} className="w-full min-w-[1460px]" alt="Home Page" style={{ height: 'calc(100vh - 120px)' }}  />
      </section>*/}
    </div>
  );
}

export default App;