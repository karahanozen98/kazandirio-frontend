import styled from "styled-components";
import colors from "./colors";

const PaymentModalWrapper = styled.div`
  background-color: ${colors.gray};
  box-shadow: 5px 5px 15px 5px rgb(136, 136, 136, 0.8);
  overflow: scroll;
  border-radius: 20px;
  text-align: center;
  margin: 20px;
  padding: 20px;

  .close {
    display: flex;
    justify-content: flex-end;
    position: relative;
    justify-content: space-between;

    h3 {
      flex: 1;
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #ddd;
      &:hover {
        background-color: #fff;
      }
    }
  }

  .product-info {
    padding: 10px;
    text-align: left;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    border-bottom: 1px solid #333;
  }
  .product-image {
    width: 150px;
    height: 150px;
  }
  mark {
    background-color: inherit;
    font-weight: 700;
  }
  i {
    margin: 0px 5px;
  }
  button {
    margin: 10px;
  }
  .cart-btn {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    background-color: ${colors.danger};
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
      background-color: ${colors.red};
    }
    &:active {
      transform: scale(1.02);
    }
  }
`;
export default PaymentModalWrapper;
