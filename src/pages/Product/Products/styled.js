import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1280px;
  margin: 30px auto 0 auto;
`;

export const Caption = styled.caption`
  font-size: 35px;
  text-align: center;
  color: #fff;
  background-color: #0f151c;
  border-radius: 15px 15px 0 0;
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
  background-color: #C41E3A;

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
  background-color: #FFC300;

  &:hover {
    cursor: pointer;
  }
`;