import propTypes from 'prop-types'
import { VerticalTimelineElement } from "react-vertical-timeline-component"

const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
      contentStyle={{background: '#163756', color: '#fff', border:'0px solid white' ,borderTop: '5px solid #fff'}}
      contentArrowStyle={{borderRight: '7px solid #163756'}}
      date={experience.date}
      dateClassName="xl:text-black"
      lineColor={'#000'}
      iconStyle={{background: experience.iconBg}}
      icon={
        <a href={experience.company_link} target='_blank' rel="noreferrer" 
          className="flex justify-center items-center w-full h-full cursor-pointer">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain"
          />
        </a>
      }
    > 
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-primary text-[16px] font-semibold" style={{margin:0}}>
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