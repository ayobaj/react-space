import image from "../assets/crew/image-douglas-hurley.png"
import data from '../assets/data.json'
import bgcrew from '../assets/crew/background-crew-desktop.jpg'
import { useState } from "react"


const Crew = () => {
const[crew] = useState(data.crew);
const[index, setIndex] = useState(0);
const [isActive, setIsActive] = useState(0)

console.log(crew)

const current = crew[index]
console.log(current)

const handleClick = (args)=>{
    setIndex(args);
    setIsActive(args);
}

return (

<div style={{backgroundImage: `url(${bgcrew})`}} className="crew h-screen bg-cover flex gap-40 px-24  py-36 ">
    <div className="details flex flex-col gap-10">
        <div className="text-white">
            <p className="flex barlow-condensed-regular gap-4 ml-20 tracking-widest text-1xl"><span className="text-white opacity-[20%]">02</span> MEET YOUR CREW</p>
        </div>
        <div>
        <p className="uppercase text-white ml-[80px] text-[32px] bellefair-regular opacity-[50%] mt-">{current.role}</p>
        <p className="uppercase text-white ml-[80px] mt-3 bellefair-regular text-5xl">{current.name}</p>
        <p className=" text-[#D0D6F9] w-[400px] ml-[80px] mt-6 bellefair-regular text-[18px] leading-6">{current.bio}</p>
        </div>
        <div className="flex gap-5 ml-[85px] mt-9  text-slate-400">
        <div className={` rounded-full  w-[15px] h-[15px] cursor-pointer ${isActive === 0 ? 'bg-white' : 'bg-[#979797] opacity-[17%] rounded-full'}`} onClick={()=> handleClick(0)}></div>
        <div className={` rounded-full  w-[15px] h-[15px] cursor-pointer ${isActive === 2 ? 'bg-white' : 'bg-[#979797] opacity-[17%] rounded-full'}`} onClick={()=> handleClick(2)}></div>
        <div className={` rounded-full  w-[15px] h-[15px] cursor-pointer ${isActive === 3 ? 'bg-white' : 'bg-[#979797] opacity-[17%] rounded-full'}`} onClick={()=> handleClick(3)}></div>
        <div className={` rounded-full  w-[15px] h-[15px] cursor-pointer ${isActive === 1 ? 'bg-white' : 'bg-[#979797] opacity-[17%] rounded-full'}`} onClick={()=> handleClick(1)}></div>
        </div>
    </div>
    
    <div className=" w-[300px] h-[400px] ml-[20px]  mt-[6px]">
    <img src={current.images.webp} alt="" className="object-cover"/>
    </div>
    
</div>
)
}

export default Crew
