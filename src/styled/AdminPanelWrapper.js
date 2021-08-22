import styled from "styled-components";
import colors from "../styled/colors";

const AdminPanelWrapper = styled.div`
  background-color: ${colors.gray};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 95%;

  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  section {
    text-align: left;
    padding: 10px;
  }
  button {
    align-items: center;
    justify-content: center;
  }
  i {
    margin: 0px 5px;
  }
`;

export default AdminPanelWrapper;
