import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pdata from "../data/data";
import { CartContext } from "../context/context";
import { useContext } from "react";

export default function Product() {
  const {cart} = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = pdata.find((p) => p.id.toString() === id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <>
    <div className=" relative">
      <img onClick={()=>navigate("/cart")} src="https://img.icons8.com/?size=160&id=igQEMSX3kMCF&format=png" className="absolute md:right-15 w-10 sm:w-15 md:top-2 sm:right-5 top-1 right-1 cursor-pointer"/>
      {cart.length > 0 ?
        <div className="sm:w-5 sm:h-5 w-3 h-3 text-[10px] sm:text-lg absolute rounded-xl bg-red-600 cursor-pointer text-white md:right-15 md:top-2 top-1 right-1 sm:right-5 flex items-center justify-center font-bold">{cart.length}</div> : null
}
    </div>
      <div className="">
        <button
          className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg mx-5 my-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row py-10 md:py-0 w-full h-full px-10 gap-10 ">
        <div className="md:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg object-cover p-5"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="md:text-3xl text-xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl mb-2">{product.description}</p>
          <p className="font-bold mb-2 uppercase">{product.category}</p>
          <div className="text-lg font-semibold space-y-2 my-4">
            <p>Price: ₹ {product.price}</p>
            <p>Offer: {product.offer}</p>
            <p>Rating: ⭐ {product.rating}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => addToCart(product)}
              className="bg-[#353535] hover:bg-[#303030] px-6 py-3 cursor-pointer rounded-2xl mt-15 mx-[5%] w-[35%]"
            >
              Add to cart
            </button>
            <button className="bg-[#353535] hover:bg-[#303030] px-6 py-3 cursor-pointer rounded-2xl mt-15 mx-[5%] w-[35%]">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
