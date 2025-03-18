import Todo from "./components/Todo"
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props){
  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`, name, completed:false}
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  function deleteTask(id){
    const filteredTasks = tasks.filter((task) => id !== task.id)
    setTasks(filteredTasks)
  }

  function editTask(id,newName){
    const editedTaskList = tasks.map((task)=>{
      if(id === task.id){
        return {...task,name:newName}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const [tasks, setTasks] = useState(props.tasks)
  const taskList = tasks?.map((task)=><Todo 
  name = {task.name} 
  id = {task.id} 
  completed = {task.completed}
  key = {task.id}
  toggleTaskCompleted = {toggleTaskCompleted}
  deleteTask = {deleteTask}
  editTask = {editTask}
  />)
  const taskNoun = taskList.length !==1 ? "tasks" : "task"
  const headingText = `${taskList.length} ${taskNoun} remaining`
  return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>TodoMatic</h1>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" ariaPressed = "true"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/>
      </div>
      <h2 id="list-heading">{headingText}</h2>
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