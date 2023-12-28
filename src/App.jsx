import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, Experience, About, Tech, Projects, Contact, Footer} from './components'
import { emoji2 } from "./assets/footer"

const App = () => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 700) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" ">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Projects/>
        <div className="relative z-0 -mt-20">
          <Contact/>
        </div>
        <Footer/> 
        
        {/* take me up */}
        <img 
          src={emoji2} 
          className={`object-contain fixed bottom-[27px] right-[13px] h-7 w-7 cursor-pointer
          ${scrolled ? "md:block hidden" : "hidden"} hover:-translate-y-2 transition-all duration-150`}
          onClick={()=>{window.scrollTo(0, 0)}}
        />
      </div>
    </BrowserRouter>
  )
}

export default App