import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Homescreen } from "./pages/Homescreen";
import {Storescreen} from "./pages/Storescreen";
import { Loginscreen } from "./pages/Loginscreen";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  

  return (
    <ShoppingCartProvider>
    <div className="App">
      <div>
        <Navbar/>
        <Container className="mb-4">
        <Routes>
        <Route path="/"  element={<Homescreen/>}/>
        <Route path="/store"  element={<Storescreen/>}/>
        <Route path="/login"  element={<Loginscreen/>}/>

        </Routes>
      </Container>
       </div>
    </div>
  </ShoppingCartProvider>
  )
}

export default App
