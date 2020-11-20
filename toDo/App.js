import './style.css';
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const clickHandle = () => {
    if (input === "") {
      alert("Ne yapacağına karar ver.");
    } else if (todos.find(todo => todo.name === input)) {
      alert("Bu zaten yapacaklarında mevcut durumda.")
    }
    else {
      const newTodo = {
        name: input,
        done: false
      }

      setTodos([...todos, newTodo])
      setInput('')
    }
  };
  const removeTodo = (todokey) => {
    setTodos(todos.filter((todo, key) => key !== todokey))
  };
  const toggleTodo = (todokey) => {
    setTodos(
      todos.map((todo, key) => {
        if (key === todokey) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };


  const inputHandle = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={input} onChange={inputHandle} placeholder="Ne Yapacaksın" />
        <button onClick={clickHandle}>Ekle</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, key) => (
          <li 
          className={todo.done ? "done" : ""} 
          
           key={key}
          ><span onClick={() => toggleTodo(key)}>
            {todo.name}
            </span>
            <button onClick={() => { removeTodo(key) }}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
