import "./App.css";
import LoginForm from "./components/loginform/LoginForm";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
      <h1 className="featured-product">Featured Products</h1>
      <Products />
      <LoginForm />
    </div>
  );
}

export default App;
