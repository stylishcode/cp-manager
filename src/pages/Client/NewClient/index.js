import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as style from "./styled";
import crypto from "crypto";

export default function NewClient() {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const client_obj = {
      id: crypto.randomBytes(4).toString("hex"),
      name,
      cep,
      location,
      number,
      city,
      state
    };

    if (!name || !cep || !location || !number || !city || !state) {
      return;
    }

    if (localStorage.getItem("clients_json") === null) {
      localStorage.setItem(
        "clients_json", 
        JSON.stringify([client_obj])
      );
      return;
    }

    localStorage.setItem(
      "clients_json",
      JSON.stringify(
        [
          ...JSON.parse(localStorage.getItem("clients_json")),
          client_obj
        ]
      )
    );
    history.push("/clients");
  };

  return (
    <div>
      <style.Back to="/clients" title="Voltar">
        <span className="fa fa-arrow-left" aria-hidden="true"></span>
      </style.Back>
      
      <style.Form>
        <style.Fieldset>
          <style.Legend>Novo Cliente</style.Legend>

          <style.Label htmlFor="name">Nome</style.Label>
          <style.Input 
            type="text" 
            placeholder="Nome completo" 
            name="name" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <style.Label htmlFor="cep">Cep</style.Label>
          <style.Input
            type="text"
            placeholder="Seu cep (somente números)"
            name="cep"
            value={cep}
            onChange={e => setCep(e.target.value)}
          />

          <style.Label htmlFor="location">Logradouro</style.Label>
          <style.Input
            type="text"
            placeholder="Logradouro (Rua, Avenida.. - Bairro)"
            name="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />

          <style.Label htmlFor="number">Número</style.Label>
          <style.Input
            type="text"
            placeholder="Número da casa"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />

          <style.Label htmlFor="city">Cidade</style.Label>
          <style.Input
            type="text"
            placeholder="ex.: Belém, São Paulo"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <style.Label htmlFor="state">Estado</style.Label>
          <style.Input
            type="text"
            placeholder="ex.: PA, SP, RJ"
            name="state"
            value={state}
            onChange={e => setState(e.target.value)}
          />

          <style.Button type="button" onClick={handleSubmit}>
            Cadastrar
          </style.Button>
        </style.Fieldset>
      </style.Form>
    </div>
  );
}