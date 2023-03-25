import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = ()=>{
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const Addnotes = async ()=>{
        const resp = await fetch('https://notes-app-02b7.onrender.com/notes', {
            method : "POST",
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify({
                title,
                description
            })
        })
        const data = await resp.json();
        console.log(data);
        if(data.data){
            navigate('/shownotes')
        }
    }
    return(
        <div>
            <div>
                <h3>Title</h3>
                <input type="text" placeholder="Text" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <h3>Description</h3>
                <input type="text" placeholder="what's on your mind" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <br />
            <div>
                <button type="submit" onClick={Addnotes}>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote;