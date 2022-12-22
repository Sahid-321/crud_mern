import{Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Home = ()=>{
const navigate = useNavigate();
    return(
        <>
        <h1>
            Home Page 
        </h1>
<Button onClick={()=>navigate('/post')}>Go to the next</Button>
        </>
    )
}

export default Home