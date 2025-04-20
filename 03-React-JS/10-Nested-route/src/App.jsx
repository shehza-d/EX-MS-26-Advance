import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./config/redux/reducers/todoSlice";

const App = () => {
  const [input, setInput] = useState("");

  // data mangwalia
  const data = useSelector((state) => state.todoSlice.todo);

  // data bhijwana ha
  const dispatch = useDispatch();

  const addTodos = () => {
    dispatch(
      addTodo({
        title: input,
      }),
    );
  };

  const deleteTodos = (index) => {
    dispatch(
      deleteTodo({
        index,
      }),
    );
  };
  const editTodo = () => {};
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodos}>add Todo</button>

      <ol>
        {data.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTodos(index)}>delete</button>
              <button onClick={editTodo}>edit</button>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default App;
