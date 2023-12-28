import { emoji1, github, linkedin, leetcode } from "../assets/footer"

const Footer = () => {
  return (
    <div className="sm:px-36 px-6 -mt-20 pt-28 pb-10 flex flex-col gap-5 justify-between md:flex-row text-secondary">

      <div className="flex flex-col items-center font-semibold text-[17px]">
        <p>Designed & Developed by</p>
        <div className="flex gap-1 items-center">
          <p>&nbsp;Jay Verma</p> <img src={emoji1} width={20} height={20} className="object-contain"/> <p>2024</p>
        </div>
      </div>

      <div className="gap-5 font-semibold tracking-wide hidden md:flex">

        <div className="group flex flex-col justify-center cursor-pointer">
          <a href="https://github.com/vermajay" target="_blank">GITHUB</a>
          <div className="h-[1.5px] w-auto bg-secondary opacity-0 -translate-y-1
          transition-all
          duration-300
          group-hover:opacity-100 
          group-hover:translate-y-0"></div>
        </div>
        <div className="group flex flex-col justify-center cursor-pointer">
          <a href="https://www.linkedin.com/in/jay-verma-a24275205" target="_blank">LINKEDIN</a>
          <div className="h-[1.5px] w-auto bg-secondary opacity-0 -translate-y-1
          transition-all
          duration-300
          group-hover:opacity-100 
          group-hover:translate-y-0"></div>
        </div>
        <div className="group flex flex-col justify-center cursor-pointer">
          <a href="https://leetcode.com/verma_jay/" target="_blank">LEETCODE</a>
          <div className="h-[1.5px] w-auto bg-secondary opacity-0 -translate-y-1
          transition-all
          duration-300
          group-hover:opacity-100 
          group-hover:translate-y-0"></div>
        </div>

      </div>
      
      <div className="flex gap-10 md:hidden mx-auto">
        <a href="https://github.com/vermajay" target="_blank">
          <img src={github} height="40px" width="40px"/>
        </a>
        <a href="https://www.linkedin.com/in/jay-verma-a24275205" target="_blank">
          <img src={linkedin} height="45px" width="45px"/>
        </a>
        <a href="https://leetcode.com/verma_jay/" target="_blank">
          <img src={leetcode} height="42px" width="42px"/>
        </a>
      </div>

    </div>
  )
}

export default Footer