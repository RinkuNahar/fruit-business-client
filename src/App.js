import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Header from './components/Common/Header/Header';
import Supplies from './components/Home/Supplies/Supplies';
import Supply from './components/Home/Supplies/Supply';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/supplies' element={<Supply></Supply>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
