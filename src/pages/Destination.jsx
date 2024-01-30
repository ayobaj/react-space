import backimgdest from '../assets/destination/background-destination-desktop.jpg';
import { useState } from 'react';
import data from '../assets/data.json'

const Destination = () => {
    const [destination, setDestination] = useState(data.destinations)
    const[index, setIndex] = useState(0);
    const[isActive, setIsActive] = useState(0);
    

    const current = destination[index];
    console.log(typeof(current))

    const handleClick = (args)=>{
        setIndex(args);
        setIsActive(args);
    }

    return (
        <div className='destination h-screen bg-cover' style={{backgroundImage: `url(${backimgdest})`}}>
        
        <h2 className='text-white pt-32 pl-36 flex flex-row'><b className='pr-8  text-slate-400 backdrop-blur-1xl'>01</b> <p className='text-1xl'>PICK YOUR DESTINATION</p></h2>

        <div className='flex flex-row justify-between pl-48 pr-60'>

        <img src={current.images.webp} className=' w-auto h-96 pt-24'></img>

        <div className='flex flex-col'>

        <div className='flex flex-row  text-slate-400 pt-10 gap-4 pl-80'>

        <p className={`flex flex-row cursor-pointer ${isActive === 0 ? 'border-b-2 border-white text-white' : ''}`} onClick={()=> handleClick(0)}>MOON</p>

        <p className= {`flex flex-row cursor-pointer ${isActive === 1 ? 'border-b-2 border-white text-white' : ''}`} onClick={()=> handleClick(0)}>MARS</p>

        <p className= {`flex flex-row cursor-pointer ${isActive === 2 ? 'border-b-2 border-white text-white' : ''}`} onClick={()=> handleClick(0)}>EUROPA</p>

        <p className= {`flex flex-row cursor-pointer ${isActive === 3 ? 'border-b-2 border-white text-white' : ''}`} onClick={()=> handleClick(0)}>TITAN</p>

        </div>

        <div className='text-white justify-end pt-8 pl-80'>

        <h1 className='moon text-8xl pb-3 pr-2 uppercase'>{current.name}</h1>

        <p className='text-sm'>{current.description}</p>

        <hr className='mt-5'></hr>   

        <div className='flex flex-row justify-between mt-3'>
        <div>
            <h2>AVG.DISTANCE</h2>
            <h2 className='uppercase  text-slate-400'>{current.distance}</h2>
        </div>

        <div>
        <h2>EST.TRAVEL TIME</h2>
        <h2 className='uppercase  text-slate-400'>{current.travel}</h2>
        </div>
        </div>

        </div>

        

        </div>

        </div>


        </div>
    )
}

export default Destination
