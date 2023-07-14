import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home" 
            className="flex flex-col items-center"
        >
            <div className="head text-6xl font-bold text-white mt-10">For All Your Bread Needs</div>
            <div className="text text-white mt-4 text-xl">Get breads from round the world</div>
            <Link to="/shop" className=" rounded-md border-white-200 border-2 px-2 py-1 mt-10 text-slate-200 font-bold hover:bg-slate-200 hover:text-slate-900">Shop Now</Link>
        </div>
    )
}

export default Home;