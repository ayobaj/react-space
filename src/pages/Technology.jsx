import bgtechimg from '../assets/technology/background-technology-desktop.jpg'
import data from '../assets/data.json'
import { useState } from 'react'



const Technology = () => {
const [technology] = useState(data.technology);
const [index, setIndex] = useState(0)
const current = technology[index]
const [isActive, setIsActive] = useState(0)


const handleClick = (args) =>{
    setIndex(args);
    setIsActive(args);
}

console.log(technology)


return (
    <div style={{backgroundImage: `url(${bgtechimg})`}} className=' main-bg h-screen bg-cover' >

    <h2 className='text-white pt-32 pl-36 flex flex-row'><b className='pr-8  text-slate-400 backdrop-blur-1xl text-3xl'>03</b> <p className='text-3xl'>SPACE LAUNCH 101</p></h2>

    <div className='parentdiv flex flex-row mt-3 justify-between'>

    <div className='number flex flex-col gap-5 ml-[11%] mt-[9%] cursor-pointer'>
        <div className= {`${isActive === 0 ? 'number-1 bg-white text-black' : 'text-white bg-none number-3 '}`} onClick={()=> handleClick(0)} >1</div>
        <div className= {`${isActive === 1 ? 'number-2 bg-white text-black' : 'text-white bg-none number-3'}`} onClick={()=> handleClick(1)}>2</div>
        <div className= {`${isActive === 2 ? 'number-3 bg-white text-black' : 'text-white bg-none number-3'}`} onClick={()=> handleClick(2)}>3</div>
    </div>

    <div className='terminology text-white w-50 mt-[8%]'>
    <div className='text-sm text-slate-400'>THE TERMINOLOGY ...</div>
    <div className='text-4xl mt-4 mb-4 uppercase'>{current.name}</div>
    <p className='text-sm text-slate-400 w-[294px]'>{current.description}</p>
    </div>

    <div className=' h-[195px] w-[380px]' >
        <img src={current.images.portrait}></img>
    </div>

    </div>
        
    </div>
)
}

export default Technology

