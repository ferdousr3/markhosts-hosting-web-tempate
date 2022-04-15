import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <Header />
      <main className="main-height pt-20" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='*' element={ <Error/> }  />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
