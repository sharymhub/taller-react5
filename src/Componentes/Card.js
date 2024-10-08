import React from "react";
import Styles from "../Styles/Card.module.css";
import avion from "../Image/avion-de-papel.png";
import diamante from "../Image/diamante.png"

function Card() {
  return (
    <div className={Styles.cards}>
      <div className={Styles.Card}>
        <img className={Styles.image} src={avion} />
        <h2 className={Styles.Title}>Basico</h2>
        <h3 className={Styles.Price}>
          100<sup>$</sup>
        </h3>
        <p className={Styles.Description}>
          Paga ahora y recibe un 30% de descuento en tu hosting y dominios.
        </p>
        <button className={Styles.Button}>Obtenerlo</button>
      </div>

      <div className={Styles.Card1}>
      <img className={Styles.image} src={diamante} />
      <h2 className={Styles.Title}>Premium</h2>
      <h3 className={Styles.Price}>
        140<sup>$</sup>
      </h3>
      <p className={Styles.Description}>
        Paga ahora y recibe un 30% de descuento en tu hosting y dominios.
      </p>
      <button className={Styles.Button1}>Obtenerlo</button>
    </div>
    </div>
  );
}
export default Card;
