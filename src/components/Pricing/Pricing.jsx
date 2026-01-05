import React, { use } from "react";
import Prices from "./Prices";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div className="mx-5 mb-50">
      <h1 className="text-7xl mt-20 mb-5">Hello! purses our membership.</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        {
          pricingData.map(price => <Prices key={price.id} price={price}></Prices>)
        }
      </div>
    </div>
  );
};

export default Pricing;
