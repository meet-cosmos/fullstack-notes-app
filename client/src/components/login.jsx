import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import './login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const HandleLogin = async () => {
        const resp = await fetch('https://notes-app-02b7.onrender.com/api/v1/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await resp.json()
        console.log(data);
        if (!data.token) {
            return alert(data.message)
        }
        if (data.token) {
            localStorage.setItem('jwt', data.token)
            navigate('/shownotes')
        }
    }
    return (
        <div id="container">
            <h1>Sign In</h1>
            <div id="inp-div">
                <div id="inp-email">
                    <h3>Email</h3>
                    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div id="inp-pass">
                    <h3>Password</h3>
                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div id="inp-cpass">
                    <input type="checkbox" /> <span>remember me</span>
                </div>
                <br />
                <div id="btn-div">
                    <button id="btn" type="submit" onClick={HandleLogin}>Submit</button>
                </div>
                <br />
                <div>
                    <Link to="/registration"> <button id="regis-btn"> New to us ? Please register </button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Login