import { Link } from "react-router-dom";
import backimage from "../assets/home/nasa-rTZW4f02zY8-unsplash.jpg";

const Home = () => {
    return (
    <div className="home h-screen bg-cover"
    style={{ backgroundImage: `url(${backimage})` }}>

        <div className="flex flex-row justify-between mr-28 ml-20 items-center">
            <div className="flex flex-col pt-72 text-white pl-8 gap-3 w-80">
            <h2 className="text-2xl">SO YOU WANT TO TRAVEL</h2>
            <h1 className="text-8xl">SPACE</h1>
            <p>
                Let us face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of it.
                Well sit back, and relax because we will give you a truly out of
                this world experience!
            </p>
            </div>
            <div className="pt-80">
                <Link to={'/Destination'} className="text-black explore text-2xl">EXPLORE</Link>
            </div>
        </div>
        </div>
    );
};

export default Home;
