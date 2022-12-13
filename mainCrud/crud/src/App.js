
import {Button} from "react-bootstrap"
import { useNavigate, Route, Routes } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  return (
    <div style={{width: "90%", margin: "auto auto", textAlign: "center"}}>
      <h1>Home Page</h1>
<Button onClick={()=> navigate("create")  } >Next</Button>

    </div>
  );
}

export default App;
