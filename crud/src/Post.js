import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
const Post = () => {
//modals bootstrap
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [saveUpdatedPost, setSaveUpdatePost] = useState({})

    const Navigate = useNavigate()
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get("/post")
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const deletePost = (id)=>{
        console.log(id);
        axios.delete(`/delete/${id}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
        window.location.reload();
    }

    const updatedPost  = (post)=>{
       setSaveUpdatePost(post)
        handleShow();
    }

    return (
        <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
            <h1>Post Page</h1>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control
                    onChange={handleChange} name="title" value={saveUpdatePost.title ? saveUpdatePost.title : ""} placeholder="update Title" />
                    <Form.Control 
                     onChange={handleChange} name="description" value={saveUpdatePost.description ? saveUpdatePost.description : ""} placeholder="update description" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {post ? (
                <> {post.map((elem) => {
                    return (
                        <div key={elem._id}
                         style={{border: "solid lightgray 1px", marginBottom:"1rem", padding:"1rem"}}>
                            <h4>
                                {elem.title}
                            </h4>
                            <p>{elem.description}</p>
                            <div style={{display:"flex", flexDirection:"row",justifyContent:"space-around"}}>
                                <Button onClick={()=> updatedPost(post)} variant="outline-info">Update</Button>
                                <Button
                                onClick={()=> deletePost(elem._id)} variant="outline-danger">Delete</Button>
                            </div>
                        </div>
                    )
                })}

                </>
            ) : 
                ''
            }
            <Button onClick={()=> Navigate(-1)}>Back</Button>
        </div>
    )
}

export default Post;