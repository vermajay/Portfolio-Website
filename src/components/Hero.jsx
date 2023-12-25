import {motion} from 'framer-motion'
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Jay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/> interfaces and web applications
          </p>
        </div>
      </div>
      {/* 3d computer */}
      <ComputersCanvas/>  

      {/* SCROLL */}
      <div className='absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-[3.5px] border-secondary flex justify-center items-start p-2'>
            <motion.div
              className='w-[0.6rem] h-[0.8rem] rounded-full bg-rose-500 mb-1'
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero