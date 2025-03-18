import { useEffect, useState } from "react";


const Inventory = ()=>{

    const [data, setData] = useState([]);
    const [add, setAdd] = useState([]);

    const fetchApi = async ()=>{
        try{
            let res = await fetch("https://fakestoreapi.com/products")
            let fetchdata = await res.json();
            setData(fetchdata)
        } 
        catch{
            alert("Try again")
        }
    }

    // const handleDelete = (id)=>{
    //     const filteritem = data.filter(_,id)=>(id != id)
    // }

    useEffect(()=>{
        fetchApi();
    },[])


    return(
        <>
        <h1>Inventory management</h1>

        {/* inventory can be added, updated, deleted,
        inventory has two access admin and employee*/}
        <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        padding: "40px",
                        }}>
            {
                data.map((ele,id)=>(
                    <div style={{padding: "40px",
                        border: "1px solid black",
                        margin: "10px"}}>
                    <img src={ele.image} style={{
                        height: "200px",
                    }}/>
                    <h2 key={id}>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <button>Add</button>
                    <button>Update</button>
                    <button>Delete</button>
                    </div>
                ))
            }
        </div>
        

        </>
        

    )
}

export default Inventory;