import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="flex justify-around items-center px-2 py-2 bg-cyan-800 text-slate-300 font-bold">
            <div className="links flex">
                <Link to="/" className="hover:text-white">Home</Link>
                <Link to="/shop" className="ml-4 hover:text-white">Shop</Link>
                <div className="cart ml-4">Cart</div>
            </div>
            <div className="head text-slate-200 text-2xl">
                Some Heading
            </div>
        </nav>
    )
}

export default Nav;