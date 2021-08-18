import styled from "styled-components";
import colors from "../styled/colors";

const AdminPanelWrapper = styled.div`
  background-color: ${colors.gray};
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: fit-content;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 20px;
  }
  section {
    width: 100%;
    text-align: left;
    padding: 10px;
  }
`;

export default AdminPanelWrapper;
