import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Header from './components/Common/Header/Header';
import Supply from './components/Home/Supplies/Supply';
import SuppliesDetails from './components/SuppliesDetials/SuppliesDetails';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/supplies/:suppliesId' element={<SuppliesDetails></SuppliesDetails>}> </Route>
    <Route path='/supplies' element={<Supply></Supply>}> </Route>
    <Route path='/login' element={<LogIn></LogIn>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
