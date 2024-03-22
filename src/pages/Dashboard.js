import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const Dashboard = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const handleInputValue = (e) => {
    setInput(e.target.value);
  };

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:4001/todos", {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();

    const newTodo = { value: input, id: uuidv4() };
    const { data } = await axios.post(
      "http://localhost:4001/add-todo",
      { ...newTodo },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    console.log("dat", data);
    setData((prevTodo) => [...prevTodo, data]);
    // setTodos((prevTodos) => [...prevTodos, newTodo])

    setInput("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4001/todo/${id}`, null, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    setData((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <form>
        <input type="text" value={input} onChange={handleInputValue} />
        <button onClick={addTodo}>Add</button>
      </form>
      <h1>Todos</h1>
      <ul>
        {data.map((todo, index) => (
          <div key={todo.id}>
            <li>{todo.value}</li>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
