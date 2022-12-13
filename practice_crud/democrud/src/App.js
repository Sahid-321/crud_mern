import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import CreatePost from './components/createPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreatePost/>} />
      </Routes>

    </div>
  );
}

export default App;
