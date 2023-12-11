import React, { useState } from "react";
import { getTodos, addTodo, updateTodo, deletedTodo } from "./axios";


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputValue = (value) => {
    setInputValue(value.target.value);
  }

  const handleAddedTodos = () => {
    if (editingIndex !== null) {

      const newTodos = [...todos];
      newTodos[editingIndex] = inputValue;
      setTodos(newTodos);
      setInputValue('');
      setEditingIndex(null);
    } else {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  }

  const deletedTodos = (index) => {
    const newTodos = todos.filter((_, $) => ($ !== index));
    setTodos(newTodos);
  }

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    const editedTodo = todos[index];
    setInputValue(editedTodo);
  };

  // const NumberedTodos = (todos) => {
  //   const NumberTodos = todos.length;
  //   return NumberTodos;
  // }

  return (
    <div className='border border-text-black mx-auto max-w-md'>
      <h1 className="font-sands
       text-3xl text-center font-extrabold mt-5 text-[#FB6610]">Todo App</h1>
      <div className="flex mt-2 mx-2">
        <input
          className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-sm px-4 py-2 flex-grow placeholder-gray-500 text-gray-700 font-bold font-2xl font-sands"
          type="text"
          placeholder="Enter a Todo here..."
          value={inputValue}
          onChange={handleInputValue}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded-md"
          onClick={handleAddedTodos}
        >
          {editingIndex !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul className="bg-[#FCE742] p-4 rounded-md list-disc list-inline my-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-3 bg-[#FFF9F6] p-3 rounded-md shadow-sm"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5"
              />
            </div>
            <span className="font-bold font-sands text-[16px]">{todo}</span>
            <div>
              <button
                className="bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white font-bold py-1 px-2 rounded"
                onClick={() => deletedTodos(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* <span className="text-black text-2xl">{NumberedTodos}</span> */}
    </div>
  );
}
