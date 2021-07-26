import React from "react";
import * as style  from "./styled";
export default function Products() {
  return (
    <div>
      <style.Header>
        <style.Back to="/" title="Voltar">
          <span className="fa fa-arrow-left" aria-hidden="true"></span>
        </style.Back>
        <h1>Produtos cadastrados</h1>
        <style.AddNew to="/new-product" title="Adicionar Produtos">
          <span className="fa fa-plus"></span>
        </style.AddNew>
      </style.Header>
      <style.Table>
        <style.TableRow>
          <style.Th>Código</style.Th>
          <style.Th>Nome</style.Th>
          <style.Th>Quantidade</style.Th>
          <style.Th colSpan="2" style={{ textAlign: "center" }}>Ações</style.Th>
        </style.TableRow>

        <style.TableRow>
          <style.TableData>2f43g4</style.TableData>
          <style.TableData>Computador</style.TableData>
          <style.TableData>30</style.TableData>
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