import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos } from './features/todoSlice';
import TodoList from './components/TodoList';
import Clock from './components/Clock';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.taskManager.todoItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="container  mx-auto p-6 max-w-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex items-center">
        <input type="text"value={text} onChange={(e) => setText(e.target.value)}
className="border border-gray-300 p-3 rounded-md w-full mr-4 text-gray-800" />
        <button
          type="submit"
          className="bg-blue-700 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Todo
        </button>
      </form>
      <TodoList />
      {todos.length > 0 && (
        <button
          onClick={() => dispatch(clearTodos())}
          className="bg-red-600 text-white p-3 rounded-md hover:bg-red-500 transition duration-300 w-full mt-4"
        >
          Delete All
        </button>
      )}
    <Clock/>
    </div>
  );
};

export default App;
