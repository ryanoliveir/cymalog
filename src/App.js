import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from "pages/Home";
import Users from 'pages/Users'
import PageNotFund from "pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<PageNotFund />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
