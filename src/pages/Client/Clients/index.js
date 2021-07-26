import React from "react";
import * as style from "./styled";

export default function Clients() {

  return (
    <div>
      <style.Header>
        <style.Back to="/" title="Voltar">
          <span className="fa fa-arrow-left" aria-hidden="true"></span>
        </style.Back>
        <h1>Clientes cadastrados</h1>
        <style.AddNew to="/new-client" title="Adicionar Cliente">
          <span className="fa fa-plus"></span>
        </style.AddNew>
      </style.Header>

      <style.Table>
        <style.TableRow>
          <style.Th>Id</style.Th>
          <style.Th>Nome</style.Th>
          <style.Th>Cep</style.Th>
          <style.Th>Logradouro</style.Th>
          <style.Th>Número</style.Th>
          <style.Th>Cidade</style.Th>
          <style.Th>Estado</style.Th>
          <style.Th colSpan="2" style={{ textAlign: "center" }}>Ações</style.Th>
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
    </div>
  );
}