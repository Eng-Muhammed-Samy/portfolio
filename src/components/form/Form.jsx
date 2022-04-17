import { useState } from "react";
import './Form.css'
export default function Form({addTodo}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handdleSubmitForm = (e)=>{
        e.preventDefault();
        addTodo({title, content});
        setTitle("");
        setContent("");
    }

    return(
        <div className="row justify-content-center">
        <form className=" form d-flex flex-column align-items-center" onSubmit={handdleSubmitForm}>
            <div>
                <label htmlFor="title" className="form-label">Title</label>
                <input className="form-control" onChange={(event)=>setTitle(event.target.value)} type="text" value={title} id="title" />
            </div>
            <div>
                <label htmlFor="content" className="form-label">Content</label>
                <textarea className="form-control" onChange={(event)=>setContent(event.target.value)} value={content} id="content" ></textarea>
            </div>
            <div className="my-4 d-flex justify-content-center">
                <input className="btn btn-sm" type="submit" value="Add"/>
            </div>
        </form>
        </div>
    );
}