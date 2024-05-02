import { useState } from "react"
import { dummyData } from "./data/todos"
import TodoItems from "./components/TodoItems"
import AddTodoForm from "./components/AddTodoForm";


function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => (
        todo.id === id ? { ...todo, completed } : todo))
    )

    alert(`Todo with id ${id} is now ${completed ? "Completed" : "not Completed"}`)
  }


  return <>
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>

      <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
        <AddTodoForm />
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItems key={todo.id} todo={todo} onCompleted={setTodoCompleted} />
          ))}

        </div>
      </div>

    </main>
  </>

}

export default App
