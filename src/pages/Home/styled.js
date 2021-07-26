import styled from "styled-components";
import { Link } from "react-router-dom";

export const container = styled.main`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2b38;
`;

export const containerLink = styled.div`
  display: flex;
  justify-content: space-between
`;

export const LinkTo = styled(Link)`
  width: 300px;
  border-radius: 10px;
  padding: 40px;
  margin: 30px;
  background-color: dodgerblue;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #fff;
  background-color: #141d25;

  &:hover {
    background-color: #293a4b;
    transition: all ease-in .3s;
  }
`;