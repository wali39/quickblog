
import './App.css';
import CreatePost from './routes/CreatePost';
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div >
      <ul className='navbar'>
        <li className='logo'><a href='/'>QuickBlog</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/addpost">add post</a></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addpost' element={<CreatePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
