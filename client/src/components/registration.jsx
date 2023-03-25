import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Registration  = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCpass] = useState("");
    const [res, setRes] = useState([])
    const Signup = async ()=>{
        if(password !== cpass){
            return alert("Password and repeat password are not matching")
        }
        console.log("password matched");
        const resp = await fetch('https://notes-app-02b7.onrender.com/api/v1/registration', {
            method : "POST",
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify({
                email,
                password
            })
        })
        const data = await resp.json()
        console.log(data);
        setRes(data)
        console.log(res);
        if(!data.data){
            return alert(data.message)
        }
        if(data.data){
            navigate('/')
        }

    }
    return(
        <div>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <br />
            <input type="password" placeholder="repeat password" onChange={(e)=>setCpass(e.target.value)}/>
            <br />
            <br />
            <input type="checkbox" onChange={(e)=>console.log(e.target.value)} /><span>I agree with TERMS & CONDITIONS</span>
            <br />
            <br />
            <button type="submit" onClick={Signup}>Continue</button>
        </div>
    )
}

export default Registration