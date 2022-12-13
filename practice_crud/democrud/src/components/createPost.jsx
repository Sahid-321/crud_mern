import { Button, Form } from "react-bootstrap"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const CreatePost = ()=>{
const navigate = useNavigate()

const[post, setPost] = useState({
    title: "",
    description:""
})
const handleChange = (event)=>{
   const {name, value} = event.target;
   console.log(event.target.value);
    setPost((prev)=> {
       
        return{
            ...prev,
            [name]:value
        }
    })
}

const handleClick = ()=>{
    console.log(post);
    axios.post("/create",post)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
    navigate("post");
}
    return(

        <>
        <h1>Create Post</h1>
<Form>
    <Form.Group>
        <Form.Control value={post.title}  onChange={handleChange} name="title" placeholder="Title" />
        <Form.Control value={post.description} onChange={handleChange} name="description" placeholder="Description" />
    </Form.Group>
    <Button onClick={handleClick} >ADD</Button>
</Form>
        
        </>
    )
}
export default CreatePost;