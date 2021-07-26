import React, { useEffect, useState } from "react";
import * as style from "./styled";

export default function Clients() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const ls = localStorage.getItem("clients_json") || "[]";
    const data = JSON.parse(ls);
    setData(data);
  }, []);

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
        {
          data.map((client, index) => {
            return (
              <style.TableRow key={index}>
                <style.TableData>{client.id}</style.TableData>
                <style.TableData>{client.name}</style.TableData>
                <style.TableData>{client.cep}</style.TableData>
                <style.TableData>{client.location}</style.TableData>
                <style.TableData>{client.number}</style.TableData>
                <style.TableData>{client.city}</style.TableData>
                <style.TableData>{client.state}</style.TableData>
                <style.TableData style={{ textAlign: "center" }}>
                  <style.EditButton>Editar</style.EditButton></style.TableData>
                <style.TableData style={{ textAlign: "center" }}>
                  <style.DeleteButton>Excluir</style.DeleteButton>
                </style.TableData>
              </style.TableRow>);
          })
        }
      </style.Table>
    </div>
  );
}