import { useEffect, useState } from "react"
import SectionWrapper from "../hoc"
import { technologies } from "../constants"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import {motion} from 'framer-motion'
import ProgressLine from "./ProgressLine/"
import VisibilitySensor from "react-visibility-sensor";

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
        <p className={styles.sectionSubText}>what i know best</p>
        <h2 className={styles.sectionHeadText}>My Skills and Technology.</h2>
      </motion.div>

      <div className={`flex flex-row flex-wrap justify-between ${isMobile ? "gap-3" : "gap-10"}`}>
        {technologies.map((technology, index)=>(
            <div className="flex gap-2">
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
                                  color: "#c02150",
                                },
                              ]}
                            />
                          );
                        }}
                </VisibilitySensor>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default SectionWrapper(Tech)