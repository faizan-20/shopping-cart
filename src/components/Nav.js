import { Link } from "react-router-dom"

const Nav = ({itemCount}) => {
    return (
        <nav className="flex justify-around items-center px-2 py-2 bg-black text-slate-300 font-bold sticky top-0 shadow-md shadow-slate-900">
            <div className="head text-slate-200 text-4xl">
                <Link to="/">Bread:Crumbs</Link>
            </div>
            <div className="links flex text-xl">
                <Link to="/" className="rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black transition duration-200">Home</Link>
                <Link to="/shop" className="ml-4 rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black transition duration-200">Shop</Link>
                {itemCount !== 0 && <Link to="/cart" className="ml-4 rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black hover:cursor-pointer transition duration-200">Cart {itemCount}</Link>}
                {itemCount === 0 && <Link to="/cart" className="ml-4 rounded-md px-1 py-1 text-slate-200 font-bold hover:border-slate-200 border-2 border-black hover:cursor-pointer transition duration-200">Cart&nbsp;&nbsp;&nbsp;</Link>}
            </div>
        </nav>
    )
}

export default Nav;