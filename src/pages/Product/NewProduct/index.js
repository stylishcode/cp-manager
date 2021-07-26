import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as style from "./styled";
import crypto from "crypto";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const product_obj = {
      id: crypto.randomBytes(4).toString("hex"),
      name,
      amount,
      price
    };

    if (!name || !amount || !price) {
      return;
    }

    if (localStorage.getItem("products_json") === null) {
      localStorage.setItem(
        "products_json",
        JSON.stringify([product_obj])
      );
      return;
    }

    localStorage.setItem(
      "products_json",
      JSON.stringify(
        [
          ...JSON.parse(localStorage.getItem("products_json")),
          product_obj
        ]
      )
    );
    history.push("/products");
  };

  return (
    <div>
      <style.Back to="/products" title="Voltar">
        <span className="fa fa-arrow-left" aria-hidden="true"></span>
      </style.Back>

      <style.Form>
        <style.Fieldset>
          <style.Legend>Novo Produto</style.Legend>

          <style.Label htmlFor="name">Nome</style.Label>
          <style.Input 
            type="text" 
            placeholder="Nome do produto" 
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <style.Label htmlFor="amount">Quantidade</style.Label>
          <style.Input 
            type="text" 
            placeholder="Quantidade de produtos" 
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <style.Label htmlFor="price">Preço</style.Label>
          <style.Input 
            type="text" 
            placeholder="123,45" 
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <style.Button type="button" onClick={handleSubmit}>
            Cadastrar
          </style.Button>
        </style.Fieldset>
      </style.Form>
    </div>
  );
}