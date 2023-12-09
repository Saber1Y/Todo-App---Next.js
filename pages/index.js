import React, { useState } from "react"

export default function Home() {
  return (
    <div className='text-black mx-auto max-w-md'>
      <h1 className="font-bold text-2xl">Todo App</h1>
      <div className="flex mt-2">
        <input className="border border-gray-900 mr-2 px-4 flex-grow" type="text" 
        placeholder="Enter a Todo here" 
        
        />
        <button  
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
         />
      </div>
    </div>
  )
}
