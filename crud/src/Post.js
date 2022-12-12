import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Post = () => {
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

    return (
        <div style={{ width: "90%", textAlign: "center", margin: "auto auto" }}>
            <h1>Post Page</h1>
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
                                <Button variant="outline-info">Update</Button>
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
        </div>
    )
}

export default Post;