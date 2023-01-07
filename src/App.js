import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import HomePage from "./pages/HomePage";
import MainRoutes from "./routes/MainRoutes";
import CartContextProvider from "./contexts/cardContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
        <Navbar  />
       
        <MainRoutes />
        <Footer/>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
