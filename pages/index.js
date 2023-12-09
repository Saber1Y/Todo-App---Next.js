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
    <div className='text-black mx-auto max-w-md'>
      <h1 className="font-bold text-2xl">Todo App</h1>
      <div className="flex mt-2">
        <input
          className="border border-gray-900 mr-2 px-4 flex-grow"
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
      <ul className="list-disc list-inline my-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
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
