import styled from "styled-components";
import colors from "./colors";

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  color: #333;
  background-color: ${colors.gray};
  box-shadow: 5px 5px 15px 5px rgb(136, 136, 136, 0.8);
  min-width: 200px;
  max-width: 400px;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;

  img {
    width: 150px;
    height: 150px;
    align-self: center;
    justify-self: flex-start;
  }

  h3 {
    margin-bottom: 0;
  }
  p {
    font-size: large.8rem;
    margin-top: 0;
  }

  .reward {
    color: ${colors.success};
    font-weight: 700;
  }
  .price {
    font-weight: 700;
  }
  .red {
    background-color: ${colors.danger};
    &:hover {
      background-color: ${colors.red};
    }
  }
  .green {
    background-color: ${colors.success};
    &:hover {
      background-color: #40dd40;
    }
  }

  .cart-btn {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:active {
      transform: scale(1.02);
    }
  }
`;

export default ProductCardWrapper;
