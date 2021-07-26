import styled from "styled-components";
import { Link } from "react-router-dom";

// criar header component com flex de 2 botões (voltar e adicionar)
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1280px;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #0f151c;
  border-radius: 15px 15px 0 0;
`;

export const Back = styled(Link)`
  color: #dddddd;
  font-size: 30px;
  margin-left: 30px;
`;

export const AddNew = styled(Link)`
  color: #0f0;
  font-size: 30px;
  margin-right: 30px;
`;


export const Th = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #1a242f;
  color: #fff;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 8px;
  color: #fff;
`;

export const TableRow = styled.tr`
  background-color: #2e4154;
  &:nth-child(even) {
    background-color: #485b6e;
  }
`;

export const EditButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  border: 0;
  text-align: center;
  color: #fff;
  background-color: #FFC300;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  border: 0;
  text-align: center;
  color: #fff;
  background-color: #C41E3A;

  &:hover {
    cursor: pointer;
  }
`;