import { useState} from 'react'
import './Input.css'
import Todo from './componentes/Todo'
import TodoForm from './componentes/TodoForm'
import Search from './componentes/Search';
import Filter from './componentes/Filter'

function App() {
  const [todos,setTodos ] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
       id:2,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
   const [search, setSearch] = useState("")
   const [filter, setFilter] = useState("All")
   const [sort, setSort] = useState("ASC")

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos,
      {
      id:Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);

  }

  const removeTodo = (id) =>{
    const newTodos = [...todos]
    // o Todo.id que tiver ID diferente do ID informado, ele vai ser retornado, já o Todo que tiver o mesmo ID ele será deletado
    const filteredtodos = newTodos.filter(todo => todo.id !== id ? todo : null
   );

   setTodos(filteredtodos);
  }


  const completeTodo = (id) => {
    const newTodos = [...todos]
    // O map ele modifica o arrray original;  se o ID for idual o ID muda o isCompleted =
    // eslint-disable-next-line no-undef
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }





  return (  <div className='App'>
      <h1 className=''> Lista de Tarefas </h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter}  setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
{/* iremos verificar abaixo se filter é igual a ALL, se for retorna TRUE e retorna todas as tarefas n muda nada, agr se filter for igual a completed retorna apenas os tudos
que estão completos, se não retorna todos que não estão completos */}
        {todos
        .filter((todo) =>
        filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b) => sort === "ASC"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text))

        .map((todo) => (
        <Todo key={todo.id}todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
                            {/*  ESSA DIV COM O NOME DE "TODO-LIST" IRÁ PERCORRER O ARRAY DE OBJETOS POSTOS ACIMA.  É ADICIONA UM {TODOS.MAP PARA MAPEAR CADA OBJETO E ADICIONALO A DIV, COM OBJETOS UTILIZAMOS PARÊNTEZES AO INVEZ DE CHAVES NA ARROW FUNCTION} */}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>


  )
}

export default App



