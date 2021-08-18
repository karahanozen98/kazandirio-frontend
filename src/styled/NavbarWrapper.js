import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: #0069e4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    padding: 10px;
    color: #fff;
  }
  .left {
    display: flex;
    flex: auto;
  }

  .middle {
    display: flex;
    align-items: center;
    flex: auto;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: auto;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .search {
    width: 100%;
    input {
      color: #fff;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  i {
    color: #fff;
    margin: 0px 5px;
    size: 30px;
  }

  .info {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0px 5px;
    padding: 15px;
    border-radius: 5px;
    &:hover {
      background-color: lightblue;
      cursor: pointer;
    }
  }
`;

export default NavbarWrapper;
