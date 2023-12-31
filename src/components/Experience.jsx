import { VerticalTimeline } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import SectionWrapper from '../hoc'
import ExperienceCard from './Cards/ExperienceCard'

const Experience = () => {
  return (
    <div className='-mt-10 pt-16' id='work'>
      <div className="text-center mt-10">
        <p className={`${styles.sectionSubText} mb-2`}>what i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard experience={experience} key={index}/>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
const ExperiencePage = SectionWrapper(Experience)
export default ExperiencePage