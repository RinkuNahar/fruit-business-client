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
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/CheckOut/Checkout';
import Footer from './components/Common/Footer/Footer';
import AddProduct from './components/AddProduct/AddProduct';
import ManageInventories from './components/ManageInventories/ManageInventories';
import { ToastContainer } from 'react-toastify';
import MyItems from './components/MyItems/MyItems';
import Blog from './components/Home/Blog/Blog';
import Review from './components/Home/Review/Review';
import Contact from './components/Home/Contact/Contact';


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

        <Route path='/checkout/:suppliesId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path='/addproduct' element={
          <RequireAuth>
           <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path='/manageInventories' element={
          <RequireAuth>
          <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>

        <Route path='/orders' element={
          <RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
