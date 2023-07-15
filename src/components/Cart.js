import ShopItems from "./ShopItems";

const Cart = ({ cartItems, setCartItems, setItemCount, itemCount, totalPrice }) => {

    const removeFromCart = (e) => {
        setCartItems(current => current.filter(item => item.id !== parseInt(e.target.closest(".shop-item").id)));
        setItemCount(itemCount - 1);
        ShopItems[e.target.closest(".shop-item").id - 1].inCart = false;
        ShopItems[e.target.closest(".shop-item").id - 1].val = 0;
    }

    const increaseItem = (e) => {
        setCartItems(current => current.map(item => {
            if (item.id === parseInt(e.target.closest(".shop-item").id)) {
                return { ...item, val: item.val + 1 }
            } else {
                return item;
            }
        }))
        ShopItems[e.target.closest(".shop-item").id - 1].val++;
    }

    const decreaseItem = (e) => {
        setCartItems(current => current.map(item => {
            if (item.id === parseInt(e.target.closest(".shop-item").id)) {
                if (item.val > 1) {
                    return { ...item, val: item.val - 1 }
                } else {
                    return { ...item, val: 1 };
                }
            }
            return item;
        }))
        ShopItems[e.target.closest(".shop-item").id - 1].val--;
    }

    return (
        <div id="cart" className="mt-10 text-slate-200 flex justify-center">
            <div id="cart-items" className="mt-10 flex flex-col items-center">
                <div id="Head" className="text-4xl font-bold">Shopping Cart</div>
                {cartItems.map(item => {
                    return (
                        <div id={item.id} key={item.id} className="shop-item shop-item-cart flex w-96 justify-between border-b-2 mb-4 items-center flex-1">
                            <div id="info" className=" text-lg">
                                <div id="item-info">{item.info}</div>
                                <div id="price" className="font-bold">Price: ${item.price}</div>
                                <div className="flex">
                                    <div
                                        className="value-button w-6 border-2 rounded-l-sm"
                                        id="decrease" value="Decrease Value" onClick={decreaseItem}
                                    >-</div>
                                    <input type="number" id="number" value={item.val} className="w-6 text-black" readOnly />
                                    <div
                                        className="value-button w-6 border-2 rounded-r-sm"
                                        id="increase" value="Increase Value" onClick={increaseItem}
                                    >+</div>
                                </div>
                            </div>
                            <div id="item-img">
                                <img className="h-32 w-32" src={item.img} alt={item.info} />
                                <div className="flex justify-center w-32 text-lg">
                                    <button 
                                        onClick={removeFromCart} 
                                        className="w-32 border-2 px-2 py-1 mb-2 mt-2 hover:bg-slate-200 hover:text-slate-800 transition duration-200 font-bold rounded-md"
                                    >Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div id="cart-details" className="border-2 border-slate-200 place-self-center ml-64">
                <div id="cart-details-head" className="font-bold text-4xl mb-5">Cart Details</div>
                <div>
                    {cartItems.map(item => {
                        return (
                            <>
                                <div key={item.id} className="flex justify-between mb-2 text-xl">
                                    <div>{item.info} x {item.val}</div>
                                    <div>${Math.round(item.price * item.val * 100)/100}</div>
                                </div>
                            </>
                        )
                    })}
                    <div className="flex justify-between font-extrabold text-2xl border-t-2 pt-2 border-slate-400">
                        <div>
                            <div>Total</div>
                            <button 
                                id="checkout-btn"
                                className="border-2 px-1 py-1 font-bold text-lg mt-2 text-slate-800 rounded-md"
                                onClick={() => alert("BOOP, does'nt work")}
                            >ORDER</button>
                        </div>
                        <div>${totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;