import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/userReducer";
import { changeCartVisibility } from "../redux/shoppingCart";
import NavbarWrapper from "../styled/NavbarWrapper";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(resetUser());
    localStorage.removeItem("authtoken");
  };

  return (
    <NavbarWrapper>
      <div className="left">
        <Link to="/">
          <h1>🎁 KazandiRio</h1>
        </Link>
      </div>
      <div className="middle">
        <TextField className="search" placeholder="Ürün Ara" />
        <i className="fas fa-search" />
      </div>

      <div className="right">
        <div className="info" onClick={() => dispatch(changeCartVisibility())}>
          <i className="fas fa-shopping-cart fa-lg" />
          {shoppingCart.items.length}
        </div>
        <div className="info">
          <i className="fas fa-money-bill fa-lg" />
          {user.balance.toFixed(2) + " TL"}
        </div>
        <div className="info">
          <i className="fas fa-gift fa-lg" />
          {user.rewards.toFixed(2) + " TL"}
        </div>
        <div className="info" style={{ display: user.role === "Admin" ? "flex" : "none" }}>
          <i className="fas fa-users-cog fa-lg" />
          <Link to="/admin"> {"Yönetim Paneli"}</Link>
        </div>
        <div className="info" onClick={handleLogOut}>
          <i className="fas fa-user-alt-slash fa-lg" />
          <p>{"Çıkış yap"}</p>
        </div>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
