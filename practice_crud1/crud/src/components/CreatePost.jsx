import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CreatePost = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <h1>
            Create Your Post
        </h1>

        <Button onClick={()=> navigate('/post/data')}>NEXT</Button>
        </>
    )
}

export default CreatePost;