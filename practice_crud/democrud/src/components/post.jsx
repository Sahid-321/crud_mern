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

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    const handleUpdate = () => {
handleShow();
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
                    <Form.Control placeholder="Title" />
                    <Form.Control placeholder="Description" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
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
                                <Button onClick={handleUpdate} variant="info">Update</Button>
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