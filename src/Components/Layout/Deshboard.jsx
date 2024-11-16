import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../ContextApi/Context";
import { toast } from "react-toastify";
import DeshBoardCard from "./DeshBoardCard";
import WishListCard from "./WishListCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import "../../App.css";
function Dashboard() {
  const { cartItems, wishlistitem, removeFromCart, removeFromWishlist } =
    useContext(CartContext);

  const [sortedCartItems, setSortedCartItems] = useState(cartItems);

  // Handle Remove from Wishlist
  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
    toast.success("Item removed from wishlist!");
  };

  const handleBuyNow = (id) => {
    removeFromCart(id);
    setSortedCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== id)
    );
    toast.success("Item Remove successfully!");
  };

  // Sort cart items by price
  const sortByPrice = () => {
    const sorted = [...sortedCartItems].sort((a, b) => b.price - a.price);
    setSortedCartItems(sorted);
  };

  // Sync sortedCartItems with cartItems whenever cartItems changes
  useEffect(() => {
    setSortedCartItems(cartItems);
  }, [cartItems]);

  // Calculate total cost for display
  const totalCost = sortedCartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const [disabled, setDisabled] = useState(false);
  const handleButton = () => {
    setDisabled(true);
  };

  const [active, setActive] = useState(false);
  useEffect(() => {
    if (sortedCartItems.length === 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [setActive, sortedCartItems]);
  return (
    <div>
      <div className="bg-purple-600  py-7 h-56 flex justify-center items-center mx-0">
        <div className="text-center text-white">
          <h2 className="font-bold text-3xl">Dashboard</h2>
          <p>
            Explore the latest gadgets and add them to your cart or wishlist!
          </p>
        </div>
      </div>
      <Tabs>
        <div className="flex justify-center bg-purple-600 pb-6">
          <TabList className=" flex  gap-5">
            <Tab>
              <NavLink className="btn rounded-full bg-transparent text-white hover:bg-black">
                Cart Items
              </NavLink>
            </Tab>
            <Tab>
              <NavLink className="btn rounded-full bg-transparent text-white hover:bg-blue-500">
                Wishlist
              </NavLink>
            </Tab>
          </TabList>
        </div>
        <div className="flex items-center justify-between my-6 md:w-[80%] mx-auto ">
          <h2 className="font-bold text-2xl">Cart</h2>
          <div className="flex justify-between gap-5 items-center">
            <p className="font-bold">Total Cost: ${totalCost.toFixed(2)}</p>
            <button
              className="btn bg-transparent border rounded-full"
              onClick={sortByPrice}
            >
              Sort By Price
            </button>
            <button disabled={active} className="btn rounded-full btn-error">
              <Modal handleButton={handleButton} totalCost={totalCost} />
            </button>
          </div>
        </div>
        <TabPanel>
          <div>
            {cartItems.length === 0 ? (
              <div className="md:w-[80%] mx-auto  flex justify-center flex-col items-center h-[300px]">
                <h2 className="font-bold text-red-600 text-2xl">
                  No items in the cart
                </h2>
                <NavLink to={"/"} className={`my-5 btn btn-error text-white `}>
                  Go To Product{" "}
                </NavLink>
              </div>
            ) : (
              <div className="md:w-[80%] mx-auto">
                <div>
                  {sortedCartItems.map((c, i) => (
                    <DeshBoardCard c={c} key={i} handleBuyNow={handleBuyNow} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {wishlistitem.length === 0 ? (
              <div className="md:w-[80%] mx-auto  flex justify-center flex-col items-center h-[300px]">
                <h2 className="font-bold text-red-600 text-2xl">
                  No items in the WishList
                </h2>
                <NavLink to={"/"} className={`my-5 btn btn-error text-white`}>
                  Go To Product{" "}
                </NavLink>
              </div>
            ) : (
              wishlistitem.map((c, i) => (
                <WishListCard
                  c={c}
                  key={i}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
              ))
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Dashboard;
