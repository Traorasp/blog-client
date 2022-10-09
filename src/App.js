import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
