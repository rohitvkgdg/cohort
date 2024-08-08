import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      try {
        const res = await fetch("http://localhost:3000/todos");
        if (!res.ok) {
          throw new Error(`HTTP Error status: ${res.status}`);
        }
        const json = await res.json();
        setTodos(json); // Adjust based on actual structure
      } catch (e) {
        console.error("Failed to fetch todos", e);
      }
    }
    fetchTodo();
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;