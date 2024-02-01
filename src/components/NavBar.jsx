import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg'

const NavBar = () => {
    return (
        <div>
            <nav className="nav fixed w-screen justify-between items-center flex flex-row">

            <div>
            <Link to={'/'}><img src={logo} alt='' className='pl-10 pt-6'></img></Link>
            </div>

            <hr className='border-1 border-white w-1/3 mt-6 pl-20 '></hr>

            {/* <div className='text-white gap-8 h-fit py-item-center'></div> */}

            <div className='sections flex flex-row bg-slate-200/10  backdrop-blur-1xl h-14 mt-7 pt-4 pl-8 text-white relative gap-5'>

            <Link to={'/'} className='flex flex-row'> <b className='pr-2'>00</b> <p>HOME</p></Link>

            <Link to={'/Destination'} className='flex flex-row'> <b className='pr-2'>01</b> <p>DESTINATION</p></Link>

            <Link to={'/Crew'} className='flex flex-row'> <b className='pr-2'>02</b> <p>CREW</p></Link>

            <Link to={'/Technology'} className='flex flex-row'> <b className='pr-2'>03</b> <p>TECHNOLOGY</p></Link>

            </div>
            
            </nav>
        
        </div>
    );
}

export default NavBar
