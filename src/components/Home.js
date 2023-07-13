import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="home" className="flex flex-col items-center">
            <div className="head text-5xl ">Home Store</div>
            <div className="text">State of the art shop</div>
            <Link to="/shop" className=" rounded-md border-lime-200 border-2 px-2 py-1 bg-lime-100">Start Shopping </Link>
        </div>
    )
}

export default Home;