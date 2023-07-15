import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home" 
            className="flex flex-col items-center"
        >
            <div className="head text-4xl font-bold text-white mt-24 ">Slice into Flavorful Bliss</div>
            <div className="text text-white mt-8 text-xl flex justify-between items-center w-96">
                Indulge in Freshly Baked Bread Delights
                <Link to="/shop" className=" rounded-md border-white-200 border-2 px-2 py-1 text-slate-200 font-bold hover:bg-slate-200 hover:text-slate-900 transition duration-200">Shop Now</Link>
            </div>
        </div>
    )
}

export default Home;