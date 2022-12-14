import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Modal from 'react-bootstrap/Modal';

const Post = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [post, setPost] = useState([]);
    const [updatePost, setUpdatedPost] = useState({
        id: "",
        title: "",
        description:""
    })

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    const handleUpdate = (id, title, description) => {
setUpdatedPost((prev)=>{
  return { ...prev,
    id:id,
    title:title,
    description: description
}
})
console.log(updatePost)

handleShow();
    }
   const handleChange = (e)=>{
    const {name, value} = e.target;
    setUpdatedPost((prev)=>{
        return {
            ...prev,
            [name]:value
        }
    })
   }

   const saveUpdatedPost = ()=>{
    console.log(updatePost)
    axios.put(`http://localhost:8000/update/${updatePost.id}`, updatePost)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))

    window.location.reload();
   }

    const handleDelete = () => {

    }
    const navigate = useNavigate();
    return (
        <>
            <h1>Data</h1>

            <Button onClick={() => navigate(-1)} >BACK</Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control 
                    onChange={handleChange} name="title"
                    value={updatePost.title ? updatePost.title: ""} placeholder="Title" />
                    <Form.Control 
                    onChange={handleChange} 
                    value={updatePost.description ? updatePost.description :""} name="description" placeholder="Description" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {
                post.map((elem) => {
                    return (
                        <div key={elem._id} style={{ width: "90%", border: "solid blue 1px" }}>
                            <h4>{elem.title}</h4>
                            <p>{elem.description}</p>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button 
                                onClick={()=>handleUpdate(elem._id, elem.title, elem.description)} variant="info">Update</Button>
                                <Button onClick={handleDelete} variant="danger">Delete</Button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Post;