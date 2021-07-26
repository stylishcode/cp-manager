import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 100%;
  max-width: 550px;
  margin: 30px auto 0 auto;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  padding: 20px;
  color: #fff;
`;

export const Legend = styled.legend`
  font-size: 35px;
  color: #fff;
  text-align: center;
`;

export const Label = styled.label`
  margin: 10px 10px 10px 0;
`;

export const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  font-size: 20px;
  padding: 5px;
`;

export const Button = styled.button`
  height: 40px;
  margin: 15px 0 0 0;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
  border: 0;

  &:hover {
    cursor: pointer;
    background-color: #243341;
    color: #fff;
    transition: all ease-in .3s;
  }
`;

export const Back = styled(Link)`
  color: #dddddd;
  font-size: 30px;
  margin-left: 30px;
`;