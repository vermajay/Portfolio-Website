import propTypes from 'prop-types'
import { VerticalTimelineElement } from "react-vertical-timeline-component"

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
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)
export default ExperienceCard

ExperienceCard.propTypes = {
  experience: propTypes.node
};