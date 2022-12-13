import {Route, Routes} from "react-router-dom"
import App from "./App"
import CreatePost from "./CreatePost"
import Post from "./Post"
const RouteApp = ()=>{
    return (
        <>
        <Routes>

            <Route path = "/" element ={<App/>} />
            <Route path = "/create" element = {<CreatePost/>} />
            <Route path = "/create/post" element = {<Post/>} />
        </Routes>
        </>
    )
}
export default RouteApp;