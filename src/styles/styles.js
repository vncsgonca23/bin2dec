import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.section`
  display: flex;
  height: 100%;
  background: #7159c1;
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
`;
export const Bin2Dec = styled.section`
  margin: 0 auto;
  padding: 10px;
  max-width:900px;
  width:100%;
  h1 {
    color: #fff;
  }

`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #fff;
    margin: 10px;
    font-size: 18px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  input {
    width: 50%;
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #a3a3a3;
    padding: 10px;
    border-radius: 2px;
    background: #e0f0f0;
    outline: none;
    &:focus {
      border: 1px solid ${darken(0.3, "#7159c1")};
    }
  }
  button {
      width: 30%;
      margin-bottom: 10px;
      margin-left: 10px;
      padding: 10px;
      border: 1px solid;
      border-radius: 2px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        border: 1px solid ${darken(0.6, "#7159c1")};
        color: #7159c1;
      }
    }
`;
