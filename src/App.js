import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "pages/Home";
import Login from 'pages/Login';
import Register from 'pages/Register';
import PageNotFund from "pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<PageNotFund />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
