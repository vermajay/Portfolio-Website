import {useState} from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import SectionWrapper from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden -mt-10 pt-20' id='contact'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>get in touch</p>
        <p className={`${styles.sectionHeadText}`}>Contact.</p>

        <form
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-8'
        >
          {/* name */}
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* email */}
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* message */}
          <label className='flex flex-col'>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="I am contacting you about . . . "
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
          hover:shadow-primary rounded-xl transition-all duration-200'>
            {loading ? 'Shooting...' : 'Shoot'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>  
  )
}

export default SectionWrapper(Contact)