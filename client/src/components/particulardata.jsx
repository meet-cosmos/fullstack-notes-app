import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DataId = ()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    const [iddata, setIdData] = useState([]);
    useEffect(() => {
        fetch(`https://notes-app-02b7.onrender.com/notes/${id}`).then((res) => {
            return res.json()
        }).then((serverData) => {
            console.log(serverData);
            setIdData(serverData.data)
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            console.log("finally");
        })
    }, [])
    const DeleteData = async (did)=>{
        console.log(did);
           await fetch(`https://notes-app-02b7.onrender.com/notes/${did}`, {
                method : "DELETE"
           })
           alert("data deleted successfully")
           navigate('/shownotes')
    }
    return(
        <div>
            {
                iddata.map((element, index)=>{
                    return(
                        <div id="id-div" key={index}>
                            <div id="tit-div">{element.title}</div>
                            <div id="des-div">{element.description}</div>
                            <div><button id="dlt-btn" onClick={()=>DeleteData(element._id)}>Delete</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataId;