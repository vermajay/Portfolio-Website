import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import SectionWrapper from '../hoc'

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

export default SectionWrapper(Experience)

const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain"
          />
        </div>
      }
    > 
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>
          {experience.company_name}
        </p>
      </div>

      <ul className="list-disc mt-5 ml-5 space-y-2">
        {experience.points.map((point,index)=>(
          <li>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)