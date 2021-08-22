import styled from "styled-components";
import colors from "./colors";

const PaymentModalWrapper = styled.div`
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  overflow: auto;
  max-height: 85%;

  .close {
    display: flex;
    justify-content: flex-end;
    position: relative;
    justify-content: space-between;
    margin-bottom: 10px;

    h3 {
      flex: 1;
    }
    .btn {
      padding: 0px 5px;
      background-color: inherit;
      color: #333;
      text-transform: none;
    }
  }
  img {
    width: 100px;
    height: 100px;
  }
  mark {
    background-color: inherit;
    font-weight: 700;
  }
  i {
    margin: 0px 5px;
  }
  .buttons {
    .primary {
      background-color: ${colors.primary};
      color: #fff;
    }
    .secondary {
      background-color: ${colors.danger};
      color: #fff;
    }
    button {
      margin: 10px;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default PaymentModalWrapper;
