import styled from "styled-components";
import colors from "./colors";

const TableWrapper = styled.div`
  overflow: auto;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }

  input {
    all: unset;
    border-bottom: 1px solid #333;
    background-color: inherit;
    font-size: inherit;
  }
  select {
    padding: 2px;
    border-bottom: 1px solid #333;
    background-color: inherit;
    font-size: inherit;
  }
  .save {
    color: #fff;
    background-color: ${colors.success};
  }
  .exit {
    color: #fff;
    background-color: ${colors.danger};
  }
  .update {
    color: #fff;
    text-transform: none;
    background-color: #333;
  }
  .delete {
    color: #fff;
    text-transform: none;
    background-color: ${colors.red};
  }
  button {
    margin: 0px 5px;
    i {
      margin: 0px 5px;
    }
  }
`;

export default TableWrapper;
