import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit,faTrash,faCheck,faUndo,} from "@fortawesome/free-solid-svg-icons";
import { toggleTodo, removeTodo, updateTodo } from "../features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    if (text.trim()) {
      dispatch(updateTodo({ id: todo.id, text }));
      setIsEditing(false);
    }
  };

  return (
    <li
      className={`flex items-center mb-4 p-4 border rounded-lg shadow-md bg-white ${
        todo.completed ? "border-green-500" : "border-gray-300"
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-300 p-2 rounded-md mr-4 flex-grow"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-grow text-lg ${
              todo.completed ? "line-through text-gray-600" : "text-gray-900"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`p-2 rounded-md mr-2 ${
              todo.completed ? "bg-gray-500" : "bg-green-600"
            } text-white hover:bg-opacity-80 transition duration-300`}
          >
            <FontAwesomeIcon icon={todo.completed ? faUndo : faCheck} />
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="p-2 rounded-md mr-2 text-white bg-black hover:bg-red-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 rounded-md text-white bg-blue-800 hover:bg-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
