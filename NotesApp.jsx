import { useState } from "react";

function NotesApp(){

const [note,setNote]=useState("");

const [notes,setNotes]=useState([]);


const addNote=()=>{

if(note==="") return;

setNotes([

...notes,

note

]);

setNote("");

};


const deleteNote=(index)=>{

setNotes(

notes.filter(

(_,i)=>i!==index

)

);

};
const editNote=(index)=>{

const updated=

prompt(

"Edit Note",

notes[index]

);

if(updated){

const temp=[...notes];

temp[index]=updated;

setNotes(temp);

}

};

return(

<div className="card">

<h1>📒 Notes App</h1>

<div className="input-box">

<input

type="text"

placeholder="Write note"

value={note}

onChange={(e)=>

setNote(

e.target.value

)

}

/>

<button

onClick={addNote}

>

Add

</button>

</div>


<ul>

{

notes.map((item,index)=>(

<li 
   className="notes-card"
   key={index}
   >

<span>

{item}

</span>
<div>

<button

onClick={()=>

editNote(index)

}

>

Edit

</button>

<button

onClick={()=>

deleteNote(index)

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

export default NotesApp;