import React from "react";
import Shop from "./pages/home/components/shop/Shop";
import Catalogs from "./pages/catalogs/Catalogs";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AdminPanel from "./components/admin/AdminPanel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="catalogs" element={<Catalogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
