import ShopItems from "./ShopItems";

const Shop = ({handleCart}) => {

    return (
        <div id="shop" className="text-slate-300 flex flex-col items-center">
            <div id="head" className="mt-9 font-bold text-4xl">Shop</div>
            <div id="item-display" className="grid grid-cols-4 gap-4 mt-24">
                {ShopItems.map((item) => {
                    return (
                        <div key={item.id} id={item.id} className="shop-item flex flex-col items-center transition duration-200">
                            <div id="item-img" className=" h-64 w-64 border-2 rounded-md rounded-b-none">
                                <img src={item.img} alt={item.info} className="text-center rounded-md w-64 h-64" />
                            </div>
                            <div id="iteminfo" className="flex justify-between items-center w-64 border-b-2 border-r-2 border-l-2 p-2 rounded-b-md">
                                <div id="iteminfotext" className=" w-24">{item.info}</div>
                                <div id="price" className=" font-extrabold">${item.price}</div>
                                <div className="addcacartItemsrt">
                                    {
                                        item.inCart ?  <button 
                                        className=" bg-slate-200 rounded-sm px-3 text-black font-bold" 
                                        onClick={(e) => {
                                            handleCart(e)
                                        }}
                                    >Remove</button> :  <button 
                                        className=" bg-slate-200 rounded-sm px-3 text-black font-bold" 
                                        onClick={(e) => {
                                            handleCart(e)
                                        }}
                                    >Add</button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop;