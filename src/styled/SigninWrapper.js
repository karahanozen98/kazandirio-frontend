import styled from "styled-components";
import colors from "./colors";

const SigninWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${colors.primary};

  form {
    margin: auto;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border-radius: 10px;

    input,
    button {
      margin: 10px;
    }

    h2 {
      color: #333;
    }
    mark {
      background-color: inherit;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export default SigninWrapper;
