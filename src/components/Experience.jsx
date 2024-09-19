import React from 'react'
import { motion } from 'framer-motion';
import {textVariant,} from '../utils/motion';
import {SectionWrapper} from '../hoc/index'
import {Exp} from '../Constants'

const Experience = () => {
  return (
    <>
        <div className="dk-exp-div  mb-[4em]">
            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-header m-2 p-2 text-center text-2xl font-semibold capitalize'>{Exp.title}</h2>
            </motion.div>

            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-sub-header m-2 p-2 text-center text-lg font-semibold capitalize'>{Exp.head}</h2>
                <p className='p-3 m-2 text-justify '>
                    {Exp.content}
                </p>
            </motion.div>
        </div>
    </>
  )
};
export default SectionWrapper(Experience,'exp')
