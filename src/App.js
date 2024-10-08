import React from "react";
import ProfileCard from "./Componentes/ProfileCard";
import Styles from "./Styles/stylesApp.module.css";
import ProductCard from "./Componentes/ProductCard";
import Card from "./Componentes/Card";

function App() {
  return (
    <div className={Styles.card}>
      <h1>Tarjeta con CSS</h1>
      <ProfileCard />
    </div>
  );
}
export default App;

function App2() {
  return (
    <div className={Styles.productcard}>
      <ProductCard />
    </div>
  );
}
//export default App2;

function App3(){
  return (
    <div>
      <Card/>
    </div>
  )
}
//export default App3 