import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './shownotes.css'
const ShowNote = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch('https://notes-app-02b7.onrender.com/notes').then((res) => {
            return res.json()
        }).then((serverData) => {
            console.log(serverData);
            setData(serverData.data)
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            console.log("finally");
        })
    }, [])

    const HandleLogout = () => {
        localStorage.removeItem('jwt')
        window.location.reload()
    }
    useEffect(() => {
        if (!localStorage.getItem('jwt')) {
            navigate('/')
        }
    }, [])
    const toNotes = (sid) => {
        navigate(`/addnotes/${sid}`)
    }
    let arr2 = []
    if (data.length !== 0 && search.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            let letter = data[i].title
            let flag = "true"
            for (let j = 0; j < search.length; j++) {
                if (search[j] !== letter[j]) {
                    flag = "false"
                    break
                }
            }
            if (flag === "true") {
                arr2.push(data[i])
            }
        }

    } else {
        arr2 = data
    }
    return (
        <div id="show-container">
            <div id="data-div">
                <div> <button className="btn-class"> Home </button></div>
                <br />
                <div><Link to="/addnotes"><button className="btn-class">Add note </button></Link></div>
                <br />
                <div> <button className="btn-class"> Export </button></div>
                <br />
                <div> <button className="btn-class" onClick={HandleLogout}> Logout </button></div>
                <br />
            </div>
            <div id="search-div"><input id="src" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} /></div>

            {
                arr2.map((element, index) => {
                    return (
                        <div onClick={() => toNotes(element._id)} id="notes-div">
                            <div key={index}>
                                <br />
                                <div>{element.date}</div>
                                <div>{element.title}</div>
                                <div>{element.description}</div>
                                <br />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowNote;