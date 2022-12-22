import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const GetPost = ()=>{
    const navigate = useNavigate()
    return(

        <>
         <Button onClick={()=> navigate(-1)}>Back</Button>
        <h1>Your Post lists</h1>

       
        </>
    )
}
export default GetPost;