import { useState } from "react"


const Login = ()=>{
    const [data, setData] = useState({
        name: "",
        Email: "",
        password: "",
        Confirm: ""
    })

    const [admin, setAdmin] = useState(false)

    const handleSubmit = (e)=>{
        e.preventdefault();
        setData({
            name: "",
            email: "",
            password: "",
            Confirm: ""
        })
    }


    const handleAdmin = ()=>{
        setAdmin(!admin)
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData(...[data], { [name]: value})
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <input name="name" placeholder="Enter name" type="text" value={data.name} onChange={(handleChange)} /><br/><br/>
            <input name="email" placeholder="Enter email" type="email" value={data.email} onChange={(handleChange)} /><br/><br/>
            <input name="password" placeholder="Enter password" type="password" value={data.password} onChange={(handleChange)} /><br/><br/>
            <input placeholder="confirm password" type="password" value={data.Confirm} onChange={(handleChange)} /><br/><br/>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default Login;