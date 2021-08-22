import colors from "./colors";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: ${colors.primary};
  display: flex;
  flex-wrap: wrap;
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
  }

  .middle {
    margin:10px;
    display: flex;
    align-items: center;
    flex: 0.8;
    max-width: 500px;
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hidden {
    display: none;
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
  .mobile-menu {
    display: none;
  }
  .mobile-links {
    display: none;
  }
  @media (max-width: 1200px) {
    .left{
      display: none;
    }
  } 
  @media (max-width: 1000px) {
    .left,
    .middle,
    .right {
      display: none;
    }
    .mobile-menu {
      position: fixed;
      top: 3%;
      right: 5%;
      display: flex;
      justify-content: flex-end;
      i {
        color: #333;
      }
    }
    .mobile-links {
      background-color: ${colors.primary};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: -100%;
      z-index: 12;
      transition: ease-in-out 0.3s;
    }
    .open {
      left: 0%;
    }
  }
`;

export default NavbarWrapper;
