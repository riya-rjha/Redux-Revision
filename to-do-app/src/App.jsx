import React, { useState } from "react";
import { addToDo, deleteToDo, toggle } from "./Redux/todoSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSubmitTask = () => {
    if (text) {
      dispatch(addToDo(text));
      setText("");
    }
  };

  const toggleTask = (id) => {
    dispatch(toggle(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteToDo(id));
    console.log("Deleted");
  };

  return (
    <div className="flex items-center justify-center mt-8 flex-col min-w-[375px] px-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">To-Do App using Redux Toolkit</h1>
      <div className="flex flex-col mt-10 items-center justify-center bg-gray-200 rounded-md border p-6 w-full max-w-md">
        <div className="flex items-center justify-between w-full mb-4">
          <input
            className="outline-none p-2 rounded flex-grow mr-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task"
          />
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
            onClick={handleSubmitTask}
          >
            Add Task
          </button>
        </div>
        <ul className="w-full">
          {todos.map((todo) => (
            <li
              className="flex items-center justify-between gap-4 mb-2 p-2 bg-white rounded shadow"
              key={todo.id}
            >
              <div
                className={`rounded-full border cursor-pointer w-8 h-8 flex items-center justify-center ${todo.completed ? 'bg-green-500' : 'bg-blue-500'} hover:bg-green-700 transition-all`}
                onClick={() => toggleTask(todo.id)}
              >
                {todo.completed && "✅"}
              </div>
              <p className={`text-xl font-semibold flex-grow ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
              </p>
              <p
                className="cursor-pointer text-red-500 hover:text-red-700 transition-all"
                onClick={() => deleteTask(todo.id)}
              >
                ❌
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
