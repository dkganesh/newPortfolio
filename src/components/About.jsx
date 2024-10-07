import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant,slideIn } from '../utils/motion';
import {SectionWrapper} from '../hoc/index'
import {Aboutconst} from '../Constants'
const About = () => {
  return (
    <>
        <div className="dk-about-div mb-[4em]">
            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-header m-2 p-2 text-center text-2xl font-semibold capitalize'>{Aboutconst.title}</h2>
            </motion.div>
            <motion.p
            variants={fadeIn('left', 'spring', 0.1, 1)}
            className=" dk-about-dec p-3 m-2 text-center">
                {Aboutconst.desc}
            </motion.p>
            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-sub-header m-2 p-2 text-center text-lg font-semibold capitalize'>{Aboutconst.edu.title}</h2>
            </motion.div>
            {Aboutconst.edu.subsec.map((sec,index)=>
                <motion.div variants={slideIn('left','spring',0.1,1)} className={` dk-about-sub-dec p-3 m-2 text-center ${index==Aboutconst.edu.subsec.length?"border-b-0":"border-b-2"}`} key={index} >
                <h3 className='text-lg mb-3 capitalize'>{sec.degname}</h3>
                <p className='text-justify'>{sec.degdesc}<b>{sec.inst}</b> {sec.degdesc2}<b>{sec.score}</b></p>
            </motion.div>
            )}
            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-sub-header m-2 p-2 text-center text-lg font-semibold capitalize'>{Aboutconst.interest.title}</h2>
            </motion.div>
            <div className='dk-about-interest flex flex-wrap p-3 justify-center '>
                {Aboutconst.interest.list.map((e,index)=>
                <motion.p variants={textVariant(0.5)} className='text-center capitalize p-1 m-1 rounded-lg' key={index} >
                {e}
                </motion.p>)}
            </div>
            

        </div>
    </>
  )
}
export default SectionWrapper(About,'about')
