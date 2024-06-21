import Image from 'next/image'
import React from 'react'

const MenuItem = () => {
  return (
  
    <div className="bg-gray-200	 font-semibold text-xl rounded-lg p-3 hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all ">
    <img src='/pizza.png' alt='pizza'  
className="mx-auto max-h-24 block "/>
   <h4 className="font-semibold text-xl my-3">
  Pizza
   </h4>
   <p className="text-gray-500 text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio, incidunt, tenetur quidem qui, dolorum nemo ipsa ipsam dolor mollitia nisi nam eligendi inventore maiores quod culpa molestias deserunt! Eos!
   </p>
   <button className="mt-4 bg-primary text-white rounded-full px-8 my-2">
    Add to cart $12
   </button>
    </div>
    
  );
}

export default MenuItem
