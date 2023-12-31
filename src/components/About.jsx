import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import SectionWrapper from '../hoc'
import propTypes from 'prop-types'

const About = () => {
  return (
    <div className='-mt-10 pt-20' id='about'>
      <motion.div variants={textVariant()} className=''>
        <p className={`${styles.sectionSubText} mb-2`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.2,1)} className='mt-7 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients to
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

export default SectionWrapper(About)

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='w-full xs:w-[250px]' tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1}>
      <motion.div
        variants={fadeIn("right", "spring", 0.3*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
ServiceCard.propTypes = {
  index: propTypes.node,
  title: propTypes.node,
  icon: propTypes.node,
};