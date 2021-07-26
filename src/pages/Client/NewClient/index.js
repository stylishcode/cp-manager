import React from "react";
import * as style from "./styled";

export default function NewClient() {
  return (
    <style.Form>
      <style.Fieldset>
        <style.Legend>Novo Cliente</style.Legend>

        <style.Label htmlFor="name">Nome</style.Label>
        <style.Input type="text" placeholder="Nome completo" name="name" />

        <style.Label htmlFor="street">Rua</style.Label>
        <style.Input type="text" placeholder="Nome da sua rua" name="street" />

        <style.Label htmlFor="house-number">Número</style.Label>
        <style.Input type="text" placeholder="Número da sua casa" name="house-number" />

        <style.Label htmlFor="local">Bairro</style.Label>
        <style.Input type="text" placeholder="Bairro em que você mora" name="local" />

        <style.Label htmlFor="city">Cidade</style.Label>
        <style.Input type="text" placeholder="Cidade onde você mora" name="city" />

        <style.Label htmlFor="state">Estado</style.Label>
        <style.Input type="text" placeholder="Estado onde você mora" name="state" />

        <style.Button type="button">Cadastrar</style.Button>
      </style.Fieldset>
    </style.Form>
  );
}