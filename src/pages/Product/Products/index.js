import React, { useState, useEffect } from "react";
import * as style  from "./styled";
export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ls = localStorage.getItem("products_json") || "[]";
    const data = JSON.parse(ls);
    setData(data);
  }, []);

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
          <style.Th>Valor</style.Th>
          <style.Th colSpan="2" style={{ textAlign: "center" }}>Ações</style.Th>
        </style.TableRow>
        {
          data.map((product, index) => {
            return (
              <style.TableRow key={index}>
                <style.TableData>{product.id}</style.TableData>
                <style.TableData>{product.name}</style.TableData>
                <style.TableData>{product.amount}</style.TableData>
                <style.TableData>R$ {product.price}</style.TableData>
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