
import React,{ useState } from 'react';

export const AddTodo=({addTodo}) => {
    const [title,setTitle]=useState("initialState");
    const [desc,setdesc]=useState("");
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("Title or Description can not be blank")
      }
      addTodo(title,desc);
    }
    return(
        <div className="container my-3">
            <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label htmlFor="desc" class="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
        </div>
    )
}