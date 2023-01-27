import { useState } from "react";
import { Login } from "./components/login/login";
import { Grid, ThemeProvider } from "@material-ui/core";
import AddProductForm from "./components/products/addProductForm";
import ProductTable from "./components/products/productTable";
import { IBaseProduct, IProduct } from "./interface/IGeneralInterface";
import { theme } from "./themeConfig";
import { Routes, Route } from "react-router-dom";

const defaultProduts: Array<IProduct> = [
  { id: 1, description: "WATER", price: 5000, store: 30 },
  { id: 2, description: "MARKER", price: 5000, store: 60 },
];

const initCurrentProduct: IProduct = {
  id: null,
  description: "",
  price: 0,
  store: 0,
};

const App = () => {
  const [products, setProducts] = useState(defaultProduts);

  const onAddProduct = (newProduct: IBaseProduct) => {
    const id = products.length + 1;
    setProducts([...products, { ...newProduct, id }]);
  };

  return (
    <ThemeProvider theme={theme}>
      
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="*" element={<Login />}/> 
          </Routes>
      
    </ThemeProvider>
  );
};

export default App;
