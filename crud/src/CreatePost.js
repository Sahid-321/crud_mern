import { Button, Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {useState} from "react"

const CreatePost = ()=>{
    const [post, setPost] = useState({
        title : "",
        description: ""
    })
    const handleChange = (event)=>{
       const {name, value}= event.target;

       setPost((prev)=> {
        return{
            ...prev,
            [name]:value
        }

       })
    }
    const navigate = useNavigate()
    return (
        <div style={{width: "98%", margin: "auto auto", textAlign: "center"} }>

        <h1>cerate Post</h1>
        <Form>
            <Form.Control
             value={post.title} onChange={handleChange} style={{marginBottom:"1rem"}} name="title" placeholder="Title" />
            <Form.Control
             value={post.description} onChange={handleChange} style={{marginBottom:"1rem"}} name="description" placeholder="Description" />
        </Form>
        <Button style={{width:"100%"}}  variant="outline-dark" onClick={()=> navigate(-1)} >Back</Button>
        </div>
    )
}
export default CreatePost;