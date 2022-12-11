import {Route, Routes} from "react-router-dom"
import App from "./App"
import CreatePost from "./CreatePost"
const RouteApp = ()=>{
    return (
        <>
        <Routes>

            <Route path = "/" element ={<App/>} />
            <Route path = "/create" element = {<CreatePost/>} />
        </Routes>
        </>
    )
}
export default RouteApp;