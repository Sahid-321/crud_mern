import { Button } from "react-bootstrap"
import {useNavigate} from 'react-router-dom';

const Home = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <h1>Home Page</h1>
        <Button onClick={()=> navigate("create")} >NEXT</Button>
        </>
    )
}
export default Home;