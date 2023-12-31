import Tilt from 'react-parallax-tilt'
import propTypes from 'prop-types'
import {github} from '../../assets'

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl z-0"
          />
          <div className="absolute inset-0 flex justify-end m-3 z-20">
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

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
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
  image: propTypes.node,
};
