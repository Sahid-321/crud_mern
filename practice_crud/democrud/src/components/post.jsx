import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Post  = ()=>{
    const navigate = useNavigate();
    return (
        <>
        <h1>Data</h1>
        <Button onClick={()=>navigate(-1)} >BACK</Button>
        </>
    )
}

export default Post;