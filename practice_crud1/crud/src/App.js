import './App.css';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import GetPost from './components/GetPost';
function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/post' element={<CreatePost/>} />
<Route path='/post/data' element={<GetPost/>} />
</Routes>

    </div>
  );
}

export default App;
