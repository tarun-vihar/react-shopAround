import { Container } from "react-bootstrap";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProdutListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />

            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            {/* <Route path="/cart(/:id)" element={<CartScreen />}></Route> */}
            {/* {/* <Route path="/cart" element={<CartScreen />}></Route> */}
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
