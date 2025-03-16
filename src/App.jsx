import Todo from "./components/Todo"
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

function App(props){
  const taskList = props.tasks?.map((task)=><Todo 
  name = {task.name} 
  id = {task.id} 
  completed = {task.completed}
  key = {task.id}
  />)
  return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>TodoMatic</h1>
        <Form/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" ariaPressed = "true"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App; 