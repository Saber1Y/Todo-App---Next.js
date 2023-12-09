import { list } from "postcss";
import React, { useState } from "react"

export default function Home() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (value) => {
    setInputValue(value.target.value);
  }

  const handleAddedTodos = (todos) => {
    setTodos({ ...todos, inputValue })
    setInputValue('');
  }

  const deletedTodos = (id) => {
    const newTodos = todos.filter((_, $) => ($ !== id));
    setTodos(newTodos);
  }


  return (
    <div className='text-black mx-auto max-w-md'>
      <h1 className="font-bold text-2xl">Todo App</h1>
      <div className="flex mt-2">
        <input className="border border-gray-900 mr-2 px-4 flex-grow" type="text"
          placeholder="Enter a Todo here"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={handleAddedTodos}
        >Add</button>
      </div>
      <ul className="list-disc list-inline my-4">
       {todos.map((todo, index) => {
        <li key={index} className="flex justify-between items-center mb-3 ">
          {todo}
          <button className="">
            X
          </button>
        </li>
       })}
      </ul>
    </div>
  )
}
