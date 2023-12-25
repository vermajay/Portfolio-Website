import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {github} from '../assets'
import SectionWrapper from '../hoc'
import { projects } from '../constants'
import { fadeIn, slideIn, textVariant } from '../utils/motion'

const Projects = () => {

  return (
    <div className='-mt-10 pt-20' id='project'>
      <motion.div variants={textVariant()} className=''>
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.2,1)}
        className='w-full flex mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'     
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=>(
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </div>

      <motion.div
        variants={slideIn("bottom","",0.3,2)}
        onClick={()=>window.open("https://github.com/vermajay", "_blank")}
        className='cursor-pointer h-[70px] sm:w-[360px] flex justify-center items-center rounded-lg mx-auto mt-14 bg-rose-900 group relative'>

        <div className='text-white-100 text-center font-semibold opacity-100 group-hover:opacity-0 group-hover:translate-y-8 absolute transition-all duration-200'>SEE MORE PROJECTS</div>
        <img src={github} height={60} width={60} className='opacity-0 -mt-16 group-hover:opacity-100 group-hover:translate-y-8 absolute transition-all duration-200'/>
      </motion.div>

    </div>  
  )
}

export default SectionWrapper(Projects)

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className='bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]'
        tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1}
       >

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl z-0'
          />
            <div className='absolute inset-0 flex justify-end m-3 z-20'>
              <div className='w-10 h-10 black-gradient flex justify-center items-center rounded-full cursor-pointer'
                onClick={()=>window.open(source_code_link, "_blank")}
              >
                <img
                  src={github}
                  alt='github'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag,index)=>(
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}