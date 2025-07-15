import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/context";
import { Tilt } from "../../components/motion-primitives/tilt";

export default function AddCart() {
  const navigate = useNavigate();
  const { cart, removeCart, addItem, removeItem } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setPrice(total);
  }, [cart]);

  return (
    <>
      <div className="">
        <button
          className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg mx-5 my-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className="flex">
        <h1 className=" font-bold text-xl md:text-2xl lg:text-5xl my-5 ml-[25%] md:ml-[30%] lg:ml-[40%]">
          Cart Items
        </h1>
        <h1 className=" font-bold text-xl md:text-2xl lg:text-5xl ml-[10%] md:ml-[15%] my-5">
          Total Price: ₹{price}
        </h1>
        </div>
        {cart.length === 0 ? (
          <h1 className="text-4xl font-bold text-red-700 flex justify-center my-20">
            No items in cart.
          </h1>
        ) : (
          cart.map((c) => (
            <Tilt>
            <div
              key={c.id}
              className="w-[80%] rounded-2xl mx-[10%] h-auto  flex flex-col md:flex-row border-1 my-5 p-5"
            >
              <div className="md:w-1/3  h-auto flex items-center justify-center">
                <img
                  src={c.image}
                  className=" object-cover mx-10 rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 h-auto flex flex-col py-5 mx-20">
                <h3 className=" font-bold text-xl md:text-3xl my-2">{c.name}</h3>
                <div className="flex md:gap-5">
                  <p className=" font-bold md:text-xl my-2">Price: ₹{c.price}</p>
                  <p className=" font-bold md:text-xl my-2">
                    Total Price: ₹{c.price * c.quantity}
                  </p>
                </div>
                <p className=" font-bold text-xl my-2">Offer: {c.offer}</p>
                <p className=" font-bold text-xl my-2">Rating: ⭐{c.rating}</p>
                <div className="flex gap-4">
                  <button onClick={() => removeItem(c.id)}>
                    {" "}
                    <img
                      className="w-10 cursor-pointer"
                      src="https://img.icons8.com/?size=96&id=omNqVqjcpnhH&format=png"
                    />
                  </button>
                  <p className="font-bold py-2">{c.quantity}</p>
                  <button
                    onClick={() => {
                      addItem(c.id);
                    }}
                  >
                    {" "}
                    <img
                      className="w-10 cursor-pointer"
                      src="https://img.icons8.com/?size=96&id=NLJIOlU8ZFVe&format=png"
                    />
                  </button>
                </div>
                <button
                  onClick={() => {
                    removeCart(c.id);
                  }}
                  className="bg-[#353535] hover:bg-[#303030] cursor-pointer rounded-2xl md:py-2 md:px-5  p-2 mt-5 lg:w-[35%]"
                >
                  Remove To Cart
                </button>
              </div>
            </div>
            </Tilt>
          ))
        )}
      </div>
    </>
  );
}
