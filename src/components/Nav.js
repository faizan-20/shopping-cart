import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="flex justify-around items-center px-2 py-2 bg-black text-slate-300 font-bold sticky top-3">
            <div className="head text-slate-200 text-2xl">
                Bread:Crumbs
            </div>
            <div className="links flex">
                <Link to="/" className="rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black">Home</Link>
                <Link to="/shop" className="rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black">Shop</Link>
                <div className="rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black hover:cursor-pointer">Cart</div>
            </div>
        </nav>
    )
}

export default Nav;