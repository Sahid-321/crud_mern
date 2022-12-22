import axios from "axios"
import { useEffect, useState } from "react"
import { Button,Modal,Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const GetPost = ()=>{
    const navigate = useNavigate()
    const [getData, setGetData] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updateData, setUpdateData] = useState({
        id:"",
        title: "",
        description:""
    })



useEffect(()=>{
    axios.get('http://localhost:8000/get')
    .then((res)=>setGetData(res.data))
    .catch((err)=> console.log('error'))
},[])
 

   

    const handleDelete = (id)=>{
    console.log(id);
        axios.delete(`http://localhost:8000/delete/${id}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
       window.location.reload();
    }

    const handleUpdate = (id,title, description)=>{
setUpdateData({
    id:id,
    title:title,
    description: description
})
handleShow()
    }


    const handleChange = (event)=>{
const{name, value} = event.target
setUpdateData((prev)=>{


    return{
        ...prev,
        [name]:value
    }
}
)
  }

  const SaveHandleClick = ()=>{
    axios.put(`http://localhost:8000/put/${updateData.id}`,updateData)
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))
window.location.reload()
}
    return(

        <>
         <Button onClick={()=> navigate(-1)}>Back</Button>
        <h1>Your Post lists</h1>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control onChange={handleChange} 
                    value={updateData.title} name="title" placeholder="title" />
                    <Form.Control onChange={handleChange} 
                    value={updateData.description} name="description" placeholder="description" />

                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={SaveHandleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       <div>
        {
            getData.map((elem)=>{
                return(
                    <div key={elem._id}>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                    <div>

                        <Button onClick={()=>handleUpdate(elem._id,elem.title, elem.description)}>Update</Button>
                        <Button onClick={()=>handleDelete(elem._id)}>Delete</Button>
                    </div>
                    </div>
                )
            })
        }
       </div>
        </>
    )
}
export default GetPost;