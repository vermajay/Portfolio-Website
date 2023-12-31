import {motion} from 'framer-motion'
import { styles } from "../styles"

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hello, I&apos;m <span className='blue-gradient_text'>Jay</span>👋
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-secondary`}>
            Software engineer based in India, specializing in technical education through hands-on learning and building applocations 
          </p>
        </div>
      </div>

      {/* SCROLL */}
      <div className='absolute xs:bottom-7 bottom-14 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30x] h-[55px] rounded-3xl border-[3px] border-secondary flex justify-center items-start p-2'>
            <motion.div
              className='w-[0.5rem] h-[0.7rem] rounded-full bg-sky-500 mb-1'
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