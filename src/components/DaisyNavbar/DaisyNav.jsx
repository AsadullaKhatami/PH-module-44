import React, { use } from 'react';
import Daisy from './Daisy';

const DaisyNav = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
      {
        pricingData.map(pricings => <Daisy key={pricings.id} pricings={pricings}></Daisy>)
      }
    </div>
  );
};

export default DaisyNav;