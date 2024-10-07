import { motion } from 'framer-motion';
import {textVariant,slideIn} from '../utils/motion';
import {SectionWrapper} from '../hoc/index'
import {Prj} from '../Constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const Projects = () => {
  const [pop,setPop] =useState(false);
  const [x,setX] = useState("");

  function open(e){
    setPop(!pop);
    setX(Prj.projects[e.target.value]);
  }

  return (
   
    <>
      <div className=" dk-prj-div mb-[4em]">
        <motion.div variants={textVariant()}>
          <h2 className='dk-sec-header m-2 p-2 text-center text-2xl font-semibold capitalize'>{Prj.title}</h2>
        </motion.div>
        {Prj.projects.map((prj,index)=>
          <motion.div variants={slideIn('left','spring',0.2*index,1)} key={index} className={`text-center p-3 mb-2 ${index==Prj.projects.length-1 ? "pb-[3.5em]":"pb-2"}`}>
              <button className='dk-prj-btn font-semibold text-lg p-2 rounded-lg w-full' value={index} onClick={open}>{prj.ptitle}</button>
          </motion.div>
        )}
        {pop && (<div className="model lg:w-6/12 md:w-6/12 md:m-auto lg:m-auto">
                <div className="overlay " onClick={open}>
                </div>
                <div className="model-content rounded-md p-3 ">
                  <p className='dk-model-p font-extrabold p-3 text-justify rounded-lg'>{x.pdesc}<Link to={x.plink}> Web url</Link>
                  <span className="dk-prj-pic-div flex flex-wrap flex-row justify-center items-center">
                    {x.pics.map((pic,i)=><img src={pic} alt="index" key={i} className='m-2 rounded-xl'></img>)}                    
                  </span>
                  </p>
                  </div>
                <button><IoMdArrowRoundBack className='dk-prj-back-btn' onClick={open}/></button>
                
                </div>)
        }
      </div>
    </>
  )
};
export default SectionWrapper(Projects,'prj')
