import React from "react";
import * as style from "./styled";

export default function Home() {
  return (
    <style.container>
      <style.containerLink>
        <style.LinkTo to="/clients">Clientes</style.LinkTo>
        <style.LinkTo to="/products">Produtos</style.LinkTo>  
      </style.containerLink>
    </style.container>
  );
}