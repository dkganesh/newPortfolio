import {Link} from 'react-router-dom'
import profile from '../assets/storage/pic1.jpg'
import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import{ profileObject } from '../Constants';
import { FaDiagramProject } from "react-icons/fa6";

export const Profilecard = () => {
  return (
    <>
        <div className=" dk-profile-card flex flex-col justify-around items-center pb-2 mt-[2em]">
            <img src={profile} alt="" className=' m-auto p-2 dk-profile-pic mt-2 dk-pulse'/>
            <div className=" dk-profile-card-div text-center mt-3">
                <h1 className="dk-profile-name uppercase text-2xl font-bold tracking-widest  mt-2">{profileObject.pname}</h1>
                <h3 className="dk-profile-desc capitalize text-sm font-semibold mt-1">{profileObject.desc}</h3>
                <div className="dk-profile-links-div my-1 flex justify-evenly">
                    <Link to={profileObject.linkedin} className='p-1 dk-profile-r-link'>
                    <FaLinkedin className='dk-profile-links' />     
                    </Link>
                    <Link to={profileObject.github} className='p-1 dk-profile-r-link'>
                    <FaGithub className='dk-profile-links'/>
                    </Link>
                    <Link to={profileObject.mail} className='p-1 dk-profile-r-link'>
                    <IoMail className='dk-profile-links'/>
                    </Link>
                    <Link to={profileObject.leetcode} className='p-1 dk-profile-r-link'>
                    <SiLeetcode className='dk-profile-links'/>
                    </Link>
                    <Link to={profileObject.insta} className='p-1 dk-profile-r-link'>
                    <FaInstagram className='dk-profile-links'/>
                    </Link>
                    <Link to="https://dkportal.netlify.app/" className='p-1 dk-profile-r-link flex justify-center items-center'>
                    <FaDiagramProject />
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
