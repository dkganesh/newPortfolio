import React from 'react'
import { Navbar as nav} from '../Constants'
import { Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
        <div className="dk-navbar">
           {nav.links.map((e,index)=>
           <Link key={index} className='p-1 mx-2 capitalize' value={e.toString()} to={`/${e.toString()}`} onClick={(e)=>console.log(e.target.value)}>{e}</Link>)}
        </div>
    </>
  )
}
