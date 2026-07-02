import TodoApp from "./components/TodoApp";
import NotesApp from "./components/NotesApp";
import "./App.css";

function App() {
  return (
    <div className="container">

      <TodoApp />

      <NotesApp />

    </div>
  );
}

export default App;