import {useState}from 'react'
import { motion } from 'framer-motion';
import {textVariant,fadeIn} from '../utils/motion';
import {SectionWrapper} from '../hoc/index'
import {Skills as dkSkills} from '../Constants'


const Skills = () => {
      const [pop,setPop] =useState(false);
      const [x,setX] = useState("");

      function open(e){
        setPop(!pop);
        setX(dkSkills.data[e.target.value]);
      }


  return (
    <>
        <div className="dk-skills-div mb-[4em]">
            <motion.div variants={textVariant()}>
                <h2 className='dk-sec-header m-2 p-2 text-center text-2xl font-semibold capitalize'>{dkSkills.title}</h2>
            </motion.div>
           <div className="dk-skill-container p-2 m-2 flex-wrap items-center justify-center">
            {dkSkills.skill.map((skill,index)=>
                    <motion.div variants={fadeIn('right','spring', 0.1 * index, 0.75)}
                    className="" key={index} >
                        <button className='dk-skill-btn  rounded-lg capitalize p-3 mx-1 my-1 cursor-pointer' value={index} onClick={open}>{skill}</button>
                    </motion.div>
                )}
           </div>
           {pop && (<div className="model">
                <div className="overlay" onClick={open}>
                </div>
                <div className="model-content rounded-md p-3 "><p className='dk-model-p font-extrabold p-3 text-justify rounded-lg'>{x}</p></div>
                </div>)
        }
        </div>
        <div id='pop'></div>
    </>
  )
};
export default SectionWrapper(Skills,'skills');