import React,{useContext} from 'react';
import { FaBarsStaggered } from 'react-icons/fa6'
import { Appcontext } from '../context/Appcontext'


const Header = () => {
    const {appdata,setAppdata} = useContext(Appcontext)
    return (
        <div className='bg-gray-800 border-b border-b-[#888] text-white flex'>
            <button onClick={()=>setAppdata({"sidebarVisible":!appdata.sidebarVisible})} className='ml-3'><FaBarsStaggered size={20} /></button>
            <a href="#" className='flex px-3 py-3 items-center'>
                <img src="https://placeholder.co/40x40" className='rounded-full' alt="" />
                <span className='ml-4 text-xl font-semibold'>REMOTE DEV</span>
            </a>
        </div>
    );
}

export default Header;
