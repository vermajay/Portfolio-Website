import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import SectionWrapper from '../hoc'
import ServiceCard from './Cards/ServiceCard'

const About = () => {
  return (
    <div className='md:-mt-10 mt-10 pt-20' id='about'>
      <motion.div variants={textVariant()} className=''>
        <p className={`${styles.sectionSubText} mb-2`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.2,1)} className='mt-7 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I&apos;m an engineering student and a skilled software
        developer with experience in JavaScript and
        C++, and expertise in frameworks like React and Node.js.<br/><br/>
         I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard {...service} key={index} index={index}/>
        ))}
      </div>
    </div>
  )
}
const AboutPage = SectionWrapper(About)
export default AboutPage