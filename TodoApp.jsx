import { useState } from "react";

function TodoApp() {

const [task,setTask]=useState("");

const [tasks,setTasks]=useState([]);


const addTask=()=>{

if(task==="") return;

setTasks([

...tasks,

{

text:task,

completed:false

}

]);

setTask("");

};


const deleteTask=(index)=>{

setTasks(

tasks.filter(

(_,i)=>i!==index

)

);

};
const editTask=(index)=>{

const updatedTask = prompt(

"Edit Task",

tasks[index].text

);

if(updatedTask){

const updated=[...tasks];

updated[index].text=

updatedTask;

setTasks(updated);

}

};

const completeTask=(index)=>{

const updated=[...tasks];

updated[index].completed=

!updated[index].completed;

setTasks(updated);

};


return(

<div className="card">

<h1>📝 Todo App</h1>

<div className="input-box">

<input

type="text"

placeholder="Enter Task"

value={task}

onChange={(e)=>

setTask(

e.target.value

)

}

/>

<button onClick={addTask}>

Add

</button>

</div>


<ul>

{

tasks.map((item,index)=>(

<li key={index}>

<div>

<input

type="checkbox"

checked={item.completed}

onChange={()=>

completeTask(index)

}

/>

<div>

<span

style={{

textDecoration:

item.completed

?

"line-through"

:

"none"

}}

>

{item.text}

</span>

<p>

{

item.completed

?

"Completed"

:

"Pending"

}

</p>

</div>
</div>
<div>

<button

onClick={()=>editTask(index)}

>

Edit

</button>

<button

onClick={()=>

deleteTask(index)

}

>

Delete

</button>

</div>

</li>

))

}

</ul>

</div>

);

}

export default TodoApp;