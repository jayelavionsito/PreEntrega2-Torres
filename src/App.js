
import ItemsContenedor from './components/ItemListContainer/ItemsContenedor';
import NaveBar from './components/Navbar/NaveBar';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import ItemsDetalleContenedor from './components/ItemsDetalleContenedor/ItemsDetalleContenedor';
import { DataProvider } from "./components/context/Dataprovider";

function App() {
  
  return (
    <DataProvider>
    <div className="App">
     
     <BrowserRouter>

      <NaveBar />



      <Routes>
      <Route path= "/" element={<ItemsContenedor />} />
      <Route path= "/category/:id" element={<ItemsContenedor />} />
      <Route path="/item/:id" element={<ItemsDetalleContenedor />} />

      </Routes>



</BrowserRouter>
    
     
      
      </div>
      </DataProvider>
      
  );
}

export default App;
  

