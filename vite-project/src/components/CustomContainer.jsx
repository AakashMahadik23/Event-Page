import React from "react";

const CustomContainer = () =>{
    return(
        <div
   className=" mt-16 ml-12 mr-12 w-1345 h-267 flex-shrink-0 rounded-lg"
   style={{
     background: 'linear-gradient(180deg, rgba(6, 139, 255, 0.25) 0%, rgba(196, 175, 177, 0.25) 53.5%, rgba(255, 98, 0, 0.25) 100%)',
   }}
>
   <p className="text-black p-8 text-xl font-bold">
     Content
   </p>
   <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
     Search
   </button>
</div>
    );

}

export default CustomContainer;