import React from "react";
import styled from "styled-components";
import lazo from "../Image/Lazo1.jpeg";

const Card = styled.div`
  border: 1px solid #f2bed1;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f5f6;
  box-shadow: 0px 0px 15px rgba(253, 206, 223, 0.1);

  &:hover {
    background-color: #f8e8ee;
    transform: scale(1.02);
  }
`;

const Profileimage = styled.img`
  width: 250px;
  border-radius: 5%;
`;

const Nameproduct = styled.h2`
  font-family: Times New Roman, "serif";
  font-size: 40px;
`;
const Description = styled.p`
  margin: 9px;
  text-align: justify;
`;
const Price = styled.h3`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 30px;
`;
const BuyNow = styled.button`
  background-color: #fdcedf;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 20px;
  font-family: Dancing Script, "cursive";
  font-style: italic;

  &:hover {
    background-color: #f2bed1;
    cursor: pointer;
    transform: scale(1.08);
  }
`;
function ProductCard() {
  return (
    <Card>
      <Profileimage src={lazo} alt="Producto" />
      <Nameproduct>Lazo Colett</Nameproduct>
      <Description>
        Lazo para el cabello de satín, suave y brillante, con un gancho de
        presión que asegura mayor firmeza y comodidad. Ideal para cualquier
        ocasión, combinando elegancia y funcionalidad.{" "}
      </Description>
      <Price>$8.000</Price>
      <BuyNow>Compra ahora</BuyNow>
    </Card>
  );
}
export default ProductCard;
