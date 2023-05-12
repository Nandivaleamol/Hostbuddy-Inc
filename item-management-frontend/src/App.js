import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './pages/AddItem';
import ItemList from './pages/ItemList';
import CustomNavbar from './components/CustomNavbar';

function App() {
  const items=[];
  return (
   <>
    <BrowserRouter>
    {/*Navabar for all pages  */}
    <CustomNavbar/>
    {/* Toask for success and errors */}
    <ToastContainer position='bottom-center'/>

    {/* routes added for various paths using Router */}
    <Routes>
      <Route path='/' element={<AddItem/>} />
      <Route path='/add' element={<AddItem/>} />
      <Route path='/item-list' element={<ItemList items={items} />} />
    </Routes>
    
    </BrowserRouter>

   </>
  ); 
}

export default App;
