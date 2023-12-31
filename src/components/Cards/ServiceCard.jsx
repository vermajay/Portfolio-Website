import propTypes from 'prop-types'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'

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
export default ServiceCard

ServiceCard.propTypes = {
    index: propTypes.node,
    title: propTypes.node,
    icon: propTypes.node,
};