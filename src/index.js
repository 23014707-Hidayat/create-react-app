import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>Hidayat's Pizza</h1>
    </header>
  );
}

function Pizza({ name, ingredients, price, photoName}) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData.map((pizza) => (
    <Pizza
      key={pizza.name}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
      photoName={pizza.photoName}
      soldOut={pizza.soldOut}
    />
  ));
  return (
    <section className="menu">
      <h2>Menu</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
      <div className="pizzas">{pizzas}</div>
    </section>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>We're currently closed</p>}
    </footer>
  );
}

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <div className="container">
      <Header />
      {isOpen && <Menu />}
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
