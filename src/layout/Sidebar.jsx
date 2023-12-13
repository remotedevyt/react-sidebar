import React, { useState,useContext } from 'react';
import { FaLayerGroup,FaChevronDown,FaCircle,FaChartSimple,FaUser,FaCube,FaHandHoldingDollar,FaBook,    } from 'react-icons/fa6';
import { Appcontext } from '../context/Appcontext'


const Sidebar = () => {

    const menu = [
        {title:"Dashboard",icon:FaLayerGroup,link:"/",subitems:[]},
        {title:"Project",icon:FaChartSimple,link:"/",subitems:[
            {title:"Project 1",icon:FaCircle,link:"/",subitems:[]},
            {title:"Project 2",icon:FaCircle,link:"/",subitems:[]}
        ]},
        {title:"Sales",icon:FaHandHoldingDollar,link:"/",subitems:[]},
        {title:"Knowledgebase",icon:FaBook,link:"/",subitems:[]},
        {title:"Crypto",icon:FaCube,link:"/",subitems:[]},
        {title:"Account",icon:FaUser,link:"/",subitems:[]}
    ];

    const [activetab,setActivetab] = useState(menu[0].title);
    const [collapse,setCollapse] = useState(null);

    const setToggler = (val) => {
        if(collapse == val){
            setCollapse(null);
        }
        else{
            setCollapse(val)
        }
    }

    const {appdata,setAppdata} = useContext(Appcontext)

    return (
        <div className={`${appdata.sidebarVisible ? 'w-[280px]' : 'w-[0px]'} transition-all duration-200 linear duration-900 flex-shrink-0 bg-gray-800 h-screen border-r border-r-[#888] text-white`}>
            <ul className='mt-2'>
                {menu.map(x=>{
                    if(x.subitems.length > 0){
                        //render dropown sidebar item
                        return <li className='w-full px-3 py-1 text-gray-300'>
                            <a onClick={()=>setToggler(x.title)} href="#" className='flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md'>
                                <span className='left flex items-center group-hover:text-white'>
                                    {React.createElement(x.icon,{size:20})}
                                    <p className='ml-4'>{x.title}</p>
                                </span> 
                                <span className='right'>
                                <FaChevronDown size={14} />
                                </span>
                            </a>
                            <ul className={`${collapse == x.title ? '' : 'hidden'}`}>
                                {x.subitems.map(y => {
                                    return <li className='w-full py-1 text-gray-300'>
                                        <a onClick={()=> setActivetab(y.title)} href="#" className={`flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md ${activetab == y.title ? 'bg-gray-700' : ''}`}>
                                            <span className='left flex items-center ml-4 group-hover:text-white'>
                                            {React.createElement(y.icon,{size:10})}
                                                <p className='ml-3'>{y.title}</p>
                                            </span> 
                                            <span className='right'></span>
                                        </a>
                                    </li>
                                })}
                                
                            </ul>
                        </li>
                    }
                    else{
                        //render normal sidebar item
                        return <li className='w-full px-3 py-1 text-gray-300'>
                            <a onClick={()=> setActivetab(x.title)} href="#" className={`flex px-4 py-3 group justify-between items-center hover:bg-gray-700 rounded-md ${activetab == x.title ? 'bg-gray-700' : ''}`}>
                                <span className='left flex items-center group-hover:text-white'>
                                    {React.createElement(x.icon,{size:20})}
                                    <p className='ml-4'>{x.title}</p>
                                </span> 
                                <span className='right'></span>
                            </a>
                        </li>
                    }
                })}
                
                
                
            </ul>
        </div>
    );
}

export default Sidebar;
