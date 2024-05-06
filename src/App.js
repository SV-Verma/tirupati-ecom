
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import LogIn from './LogIn';
import Footer from './Footer';
import Home from './Home';
import CListItem from './CListItem';
import CategoryList from './CategoryList';
import NameSlide from './NameSlide';
import SingleProduct from './SingleProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CategoryList />
        <NameSlide />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/CListItem" element={<CListItem />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
