import { useEffect, useState } from "react";
import HomeOne from "./pages/homeOne/HomeOne"


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', false);
    }
  }, [darkMode]);
  return (
    <>  <HomeOne darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}/> </>
  )
}

export default App