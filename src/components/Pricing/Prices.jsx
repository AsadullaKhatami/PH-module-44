import { CircleCheckBig } from "lucide-react";
import React from "react";

const Prices = ({ price }) => {
  // console.log(price);
  const { name, prices, billing, description, features, isPopular } = price;
  return (
    <div className="border rounded-xl bg-white p-10 text-gray-400 flex flex-col">
      {isPopular && (
        <div className="w-full flex justify-end">
          <p className="bg-[#DAA520] p-2 rounded-full text-black">
            Most popular
          </p>
        </div>
      )}
      <h3 className="my-4">
        <span className="text-3xl text-black">{prices}</span> /{billing}
      </h3>
      <h1 className="text-4xl text-black my-2">{name}</h1>
      <p className="mb-4">{description}</p>
      <div className="grow">
        {features.map((feature, index) => (
          <p key={index} className="flex">
            <CircleCheckBig className="mr-3"></CircleCheckBig>
            {feature}
          </p>
        ))}
      </div>
      <button className="w-full bg-gray-400 text-white p-3 my-2 hover:bg-gray-700">
        Buy Now
      </button>
    </div>
  );
};

export default Prices;
