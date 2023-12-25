import { useState, useRef, useEffect } from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo} from '../assets'
import { Link } from 'react-router-dom'
import { Link as SLink } from "react-scroll";

const Navbar = () => {
  // for menu in open and close state
  const [toggle, setToggle] = useState(false)
  const navMenu = useRef(null)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeOpenMenus = (e)=>{
    if(navMenu.current && toggle && !navMenu.current.contains(e.target)){
      setToggle(false)
    }
  }
  document.addEventListener('mousedown',closeOpenMenus)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed py-4 top-0 z-20 opacity-100 transition-all duration-100
    ${scrolled ? "bg-primary bg-opacity-90 backdrop-blur-sm" : ""}`}>

      <div className='w-full flex justify-between items-center max-w-[1400px] mx-auto'>
        {/* LOGO AND NAME */}
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={()=>{
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Jay Verma</p>
        </Link>

        {/* NAVBAR */}
        <ul className='hidden sm:flex flex-row gap-7'>
          {
            navLinks.map((link)=>(
              <li
                key={link.id}
                className='hover:text-white text-[18px] font-medium cursor-pointer text-secondary'
              >
                <SLink activeClass='active' spy to={link.id}>
                  {link.title}
                </SLink>
              </li>
            ))
          }
        </ul>


          {/* MOBILE NAVBAR */}
        <div ref={navMenu} className='sm:hidden flex flex-1 justify-end items-center relative'>

          {/*Hamburger icon*/}
          <a id="menu-icon" className={`${toggle ? 'close' : ''} cursor-pointer z-20 absolute`} 
            onClick={()=>setToggle(!toggle)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </a>

          <div className={`${!toggle ? 'opacity-0' : 'opacity-100'} p-6 absolute -top-9 -right-4 mx-4 my-3 bg-zinc-950
          min-w-[140px] z-10 rounded-md transition-all duration-200`}>

            <ul className='flex flex-col gap-4 pt-6 pr-8 items-start justify-end'>
              {
                navLinks.map((link)=>(
                  <li
                    key={link.id}
                    className='hover:text-white text-[18px] font-medium cursor-pointer text-secondary'
                  >
                    <SLink activeClass='active' spy to={link.id} onClick={()=>setToggle(false)}>
                      {link.title}
                    </SLink>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar