import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const CreatePost = ()=>{
    const navigate = useNavigate()
const [postData, setPostData] = useState({
    title: "",
    description: ""
})
const handleChange = (event)=>{
const {name, value} = event.target;
setPostData((prev)=>{
return {
    ...prev,
[name]:value
}
}


)
console.log(postData);
}


const handleClick = (event)=>{
    event.preventDefault();
  axios.post('http://localhost:8000/post',postData)
  .then((res) =>console.log(res))
  .catch((err) => {
    console.log(err)
  });

  navigate('/post/data')
}
    return(
        <>
        <h1>
            Create Your Post
        </h1>
        <Form>
            <Form.Group>
                <Form.Control value={postData.title} onChange={handleChange} name="title" placeholder="Title" />
                <Form.Control value={postData.description} onChange={handleChange} name="description" placeholder="Description" />
            </Form.Group>
        </Form>

        <Button onClick={handleClick}>NEXT</Button>
        </>
    )
}

export default CreatePost;