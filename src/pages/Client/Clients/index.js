import React from "react";
import * as style from "./styled";

export default function Clients() {
  return (
    <style.Table>

      <style.Caption>Clientes cadastrados</style.Caption>

      <style.TableRow>
        <style.Th>Código</style.Th>
        <style.Th>Nome</style.Th>
        <style.Th>Rua</style.Th>
        <style.Th>Número</style.Th>
        <style.Th>Bairro</style.Th>
        <style.Th>Cidade</style.Th>
        <style.Th>Estado</style.Th>
        <style.Th colSpan="2" style={{textAlign: "center"}}>Ações</style.Th>
      </style.TableRow>

      <style.TableRow>
        <style.TableData>2f43g4</style.TableData>
        <style.TableData>Matheus Enrique Pena Pereira</style.TableData>
        <style.TableData>Tv. Mauriti</style.TableData>
        <style.TableData>773</style.TableData>
        <style.TableData>Pedreira</style.TableData>
        <style.TableData>Belém</style.TableData>
        <style.TableData>Pará</style.TableData>
        <style.TableData style={{ textAlign: "center" }}>
          <style.EditButton>Editar</style.EditButton></style.TableData>
        <style.TableData style={{ textAlign: "center" }}>
          <style.DeleteButton>Excluir</style.DeleteButton>
        </style.TableData>
      </style.TableRow>
    </style.Table>
  );
}