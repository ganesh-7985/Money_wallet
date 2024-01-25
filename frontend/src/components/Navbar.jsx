import React from 'react'
import logo from '../../images/logo.svg'
import { CgProfile } from "react-icons/cg";


function Navbar() {
    return (
        <div className=' shadow-md w-full h-[92px] fixed top-0 left-0' >
            <div className='md:flex justify-around items-center   bg-white font-bold '>
            <div><a href='#'><img src={logo}></img></a></div>
            <div className='flex gap-1'>
                <div className='hover:bg-[#f5f7fb] px-3 py-2 rounded-sm '>Paytm for Consumers</div>
                <div className='hover:bg-[#f5f7fb] px-3 py-2 rounded-sm '>Paytm for Business</div>
                <div className='hover:bg-[#f5f7fb] px-3 py-2 rounded-sm '>Investor Relations</div>
                <div className='hover:bg-[#f5f7fb] px-3 py-2 rounded-sm '>Company</div>
                <div className='hover:bg-[#f5f7fb] px-3 py-2 rounded-sm '>carrier</div>
            </div>
            <div >
                <button id='large'  className='flex items-center right-1 w-[120px] h-[32px] px-2 py-2 bg-[#02b9f2] hover:bg-[#10498a]  rounded-full text-white relative'> Sign In <CgProfile id='small' className='  self-baseline absolute top-1 right-2 bg-[#10498a] hover:bg-[#02b9f2] rounded-full text-2xl'/> </button>
            </div>
            </div>
        </div>
    )
}

export default Navbar