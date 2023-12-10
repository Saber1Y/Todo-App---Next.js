import React, { useState } from "react";

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

  return (
    <div className='border border-text-black mx-auto max-w-md'>
      <h1 className="font-sands
       text-3xl text-center font-extrabold mt-5 text-[#FB6610]">Todo App</h1>
      <div className="flex mt-2">
        <input
          className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-sm px-4 py-2 flex-grow placeholder-gray-500 text-gray-700"
          type="text"
          placeholder="Enter a Todo here"
          value={inputValue}
          onChange={handleInputValue}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={handleAddedTodos}
        >
          {editingIndex !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul className="bg-gray-100 p-4 rounded-md list-disc list-inline my-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-3 bg-white p-3 rounded-md shadow-sm"
          >
            <span>{todo}</span>
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

    </div>
  );
}
