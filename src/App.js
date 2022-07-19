
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import Ssl from './Pages/Pricing/Ssl/Ssl';
import CloudHosting from "./Pages/Pricing/CloudHosting/CloudHosting";
import SharedHosting from "./Pages/Pricing/SharedHosting/SharedHosting"
import Domains from "./Pages/Pricing/Domains/Domains";
import EmailHosting from "./Pages/Pricing/EmailHosting/EmailHosting";
import VpsHosting from "./Pages/Pricing/VpsHosting/VpsHosting"
import WebsiteBuilder from "./Pages/Pricing/WebsiteBuilder/WebsiteBuilder";
import WindowsVpsHosting from  "./Pages/Pricing/WindowsVpsHosting/WindowsHosting"


function App() {
  return (
    <>
      <Header />
      <main className="main-height pt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />}>
            <Route index element={<SharedHosting/>} />
            <Route path="cloudHosting" element={<CloudHosting />} />
            <Route path="domains" element={<Domains />} />
            <Route path="emailHosting" element={<EmailHosting/>} />
            <Route path="vpsHosting" element={<VpsHosting />} />
            <Route path="websiteBuilder" element={<WebsiteBuilder />} />
            <Route path="windowsVpsHosting" element={<WindowsVpsHosting />} />
            <Route path="ssl" element={<Ssl />} />
            
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

/* My first git pull and checkout and push */

export default App;
