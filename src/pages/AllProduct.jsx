import { useState, useRef, useContext } from "react";
import React from "react";
import pdata from "../data/data";
import { useNavigate } from "react-router-dom";
import { Tilt } from "../../components/motion-primitives/tilt";
import { CartContext } from "../context/context";

export default function AllProduct() {
  const {cart} = useContext(CartContext);
  const inpRef = useRef();
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const getValue = () => {
    setValue(inpRef.current.value);
  };

  const products = pdata
    .filter((p) => (value ? p.price <= value : true))
    .filter((p) => p.inStock);

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
    <div className=" relative">
      <img onClick={()=>navigate("/cart")} src="https://img.icons8.com/?size=160&id=igQEMSX3kMCF&format=png" className="absolute md:right-15 w-10 sm:w-15 md:top-2 sm:right-5 top-1 right-1 cursor-pointer"/>
      {cart.length > 0 ?
        <div className="sm:w-5 sm:h-5 w-3 h-3 text-[10px] sm:text-lg absolute rounded-xl bg-red-600 cursor-pointer text-white md:right-15 md:top-2 top-1 right-1 sm:right-5 flex items-center justify-center font-bold">{cart.length}</div> : null
}
    </div>
        <div className="flex flex-col sm:flex-row justify-center my-5 md:gap-5 gap-3">
          <div className="md:gap-5 gap-3 flex justify-center">
            <label
              className="text-md my-auto md:text-2xl font-bold"
              htmlFor="price"
            >
              Product under: ₹
            </label>
            <input
              ref={inpRef}
              id="price"
              type="text"
              className="p-1 rounded bg-[#363636] w-32 md:w-auto"
            ></input>
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-[#353535] px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#303030]"
              onClick={getValue}
            >
              find
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {products.map((p) => (
            <Tilt>
              <div
                key={p.id}
                onClick={() => goToProduct(p.id)}
                className="border-2 rounded-2xl m-5 p-5 w-96 hover:bg-[#353535]"
              >
                <div className="w-80 bg-white mb-5 ml-2">
                  <img className=" object-cover mx-auto" src={p.image}></img>
                </div>
                <div className="flex flex-wrap gap-2">
                  <h3 className="font-bold text-xl my-2">{p.name}</h3>
                  <p className="my-2">{p.description}</p>
                  <span className="mr-3  font-bold text-30">{p.category}</span>
                  <span className="mr-3 border-1 p-1 rounded">Price: ₹ {p.price}</span>
                  <span className="mr-3 border-1 p-1 rounded">Offer: {p.offer}</span>
                  <span className="mr-3 border-1 p-1 rounded">Rating: ⭐{p.rating}</span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
    </>
  );
}
