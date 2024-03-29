import { useEffect, useState } from "react"
import SectionWrapper from "../hoc"
import { technologies } from "../constants"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import {motion} from 'framer-motion'
import ProgressLine from "./ProgressLine/"
import VisibilitySensor from "react-visibility-sensor";
import { download } from "../assets"

const Tech = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:800px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])

  return (
    <div className='-mt-10 pt-20' id='tech'>

      <motion.div variants={textVariant()} className='mb-16'>
        <p className={`${styles.sectionSubText} mb-2`}>what i know best</p>
        <h2 className={styles.sectionHeadText}>My Skills and Technology.</h2>
      </motion.div>

      <div className={`flex flex-row flex-wrap justify-between ${isMobile ? "gap-3" : "gap-10"}`}>
        {technologies.map((technology, index)=>(
            <div className="flex gap-2" key={index}>
                <img src={technology.icon} width={isMobile ? 50 : 61} height={isMobile ? 50 : 61}/>

                <VisibilitySensor>
                    {({ isVisible }) => {
                          return (
                            <ProgressLine
                              key={index}
                              index={index}
                              isVisible={isVisible}
                              isMobile={isMobile}
                              label={technology.name}
                              visualParts={[
                                {
                                  percentage: technology.progress.toString().concat("%"),
                                  color: "#2b77e7",
                                },
                              ]}
                            />
                          );
                        }}
                </VisibilitySensor>
            </div>
        ))}
      </div>

      <div
        onClick={()=>window.open("/resume.pdf", "_blank")}
        className='cursor-pointer h-[70px] sm:w-[400px] flex justify-center items-center rounded-lg mx-auto mt-20 md:mt-28 bg-blue group relative text-base'>

        <div className='text-white-100 text-center font-semibold opacity-100 group-hover:opacity-0 group-hover:translate-y-8 absolute transition-all duration-200 uppercase'>grab a copy of my résumé</div>
        <img src={download} height={60} width={60} className='opacity-0 -mt-16 group-hover:opacity-100 group-hover:translate-y-8 absolute transition-all duration-200'/>
      </div>
      
    </div>
  )
}
const TechPage = SectionWrapper(Tech)
export default TechPage