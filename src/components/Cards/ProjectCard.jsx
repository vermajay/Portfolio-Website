import Tilt from 'react-parallax-tilt'
import propTypes from 'prop-types'
import {github, link} from '../../assets'

const ProjectCard = ({ name, description, tags, image, source_code_link, live_link }) => {
  return (
    <div>
      <Tilt
        className="bg-[#2c4761] p-3 rounded-2xl w-full sm:w-[23rem] flex flex-col md:h-[500px]"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={3000}
        scale={1}
        transitionSpeed={2000}
      >
        <div className="relative">
          <div className='group relative cursor-pointer'
            onClick={() => window.open(live_link, "_blank")}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl z-0 group-hover:blur-[1.5px] transition-all duration-400"
            />
            <div
              className="absolute top-[45%] right-[45%] group-hover:block hidden"
            >
              <img
                src={link}
                alt="live link"
                className="object-contain h-10 w-10"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 m-3 z-20 rounded-full">
            <div
              className="w-10 h-10 black-gradient flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 p-2">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 px-2 pb-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] text-white rounded-xl px-2`} style={{background:tag.color}}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
export default ProjectCard
ProjectCard.propTypes = {
  name: propTypes.node,
  description: propTypes.node,
  tags: propTypes.node,
  source_code_link: propTypes.node,
  live_link: propTypes.node,
  image: propTypes.node,
};
