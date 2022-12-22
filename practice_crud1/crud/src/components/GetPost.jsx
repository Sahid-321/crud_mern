import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const GetPost = ()=>{
    const navigate = useNavigate()
    const [getData, setGetData] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8000/get')
    .then((res)=>setGetData(res.data))
    .catch((err)=> console.log('error'))
},[])
 

   

    const handleDelete = (id)=>{
    console.log(id);
        axios.delete(`http://localhost:8000/delete/${id}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
       window.location.reload();
    }

    const handleUpdate = ()=>{

    }
    return(

        <>
         <Button onClick={()=> navigate(-1)}>Back</Button>
        <h1>Your Post lists</h1>

       <div>
        {
            getData.map((elem)=>{
                return(
                    <div key={elem._id}>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                    <div>

                        <Button onClick={handleUpdate}>Update</Button>
                        <Button onClick={()=>handleDelete(elem._id)}>Delete</Button>
                    </div>
                    </div>
                )
            })
        }
       </div>
        </>
    )
}
export default GetPost;