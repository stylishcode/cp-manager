import React from "react";
import * as style from "./styled";


export default function NewProduct() {
  return (
    <style.Form>
      <style.Fieldset>
        <style.Legend>Novo Produto</style.Legend>

        <style.Label htmlFor="name">Nome</style.Label>
        <style.Input type="text" placeholder="Nome do produto" name="name" />

        <style.Label htmlFor="amount">Quantidade</style.Label>
        <style.Input type="text" placeholder="Quantidade de produtos" name="amount" />

        <style.Label htmlFor="price">Preço</style.Label>
        <style.Input type="text" placeholder="R$ 123,45" name="price" />
        
        <style.Button type="button">Cadastrar</style.Button>
      </style.Fieldset>
    </style.Form>
  );
}