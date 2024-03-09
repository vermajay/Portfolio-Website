import { styles } from '../styles'
import {github} from '../assets'
import SectionWrapper from '../hoc'
import { projects } from '../constants'
import ProjectCard from './Cards/ProjectCard'

const Projects = () => {

  return (
    <div className='-mt-10 pt-20' id='project'>
      <div>
        <p className={`${styles.sectionSubText} mb-2`}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <p className='w-full flex mt-7 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </p>

      <div className='mt-20 flex justify-start flex-wrap gap-5'>
        {projects.map((project, index)=>(
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>

      <div
        onClick={()=>window.open("https://github.com/vermajay", "_blank")}
        className='cursor-pointer h-[70px] sm:w-[360px] flex justify-center items-center rounded-lg mx-auto mt-14 bg-blue group relative'>

        <div className='text-white-100 text-center font-semibold opacity-100 group-hover:opacity-0 group-hover:translate-y-8 absolute transition-all duration-200'>SEE MORE PROJECTS</div>
        <img src={github} height={60} width={60} className='opacity-0 -mt-16 group-hover:opacity-100 group-hover:translate-y-8 absolute transition-all duration-200'/>
      </div>

    </div>  
  )
}
const ProjectPage = SectionWrapper(Projects)
export default ProjectPage