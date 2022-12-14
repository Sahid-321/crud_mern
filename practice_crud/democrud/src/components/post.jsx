import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

const Post  = ()=>{
const [post, setPost] = useState([]);

useEffect(()=>{
axios.get("http://localhost:8000/posts")
.then((res)=> {console.log(res.data)
    setPost(res.data)
})
.catch((err)=> console.log(err))

},[])

    const navigate = useNavigate();
    return (
        <>
        <h1>Data</h1>

        <Button onClick={()=>navigate(-1)} >BACK</Button>

        {
            post.map((elem)=>{
                return(
                    <div key={elem._id} style={{width:"90%", border:"solid blue 1px"}}>
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Post;