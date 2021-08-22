import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/userReducer";
import { setOpen } from "../redux/depositMenu";
import { setValue } from "../redux/search";
import { changeCartVisibility } from "../redux/shoppingCart";
import NavbarWrapper from "../styled/NavbarWrapper";
import { TextField } from "@material-ui/core";
import { useLocation } from "react-router";
import MobileLinks from "./MobileLinks";

function Navbar() {
  const location = useLocation().pathname;
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleLogOut = () => {
    dispatch(resetUser());
    localStorage.removeItem("authtoken");
  };

  return (
    <NavbarWrapper>
      <div className="mobile-menu">
        <i className="fas fa-bars fa-lg" onClick={() => setOpenMobileMenu(true)} />
      </div>
      <div className="left">
        <Link to="/">
          <h1>🎁 KazandiRio</h1>
        </Link>
      </div>
      <div className="middle">
        <TextField className="search" placeholder={"Arama yap..."} onChange={(e) => dispatch(setValue(e.target.value))} />
        <i className="fas fa-search" />
      </div>
      <MobileLinks open={openMobileMenu} setOpen={setOpenMobileMenu} />
      <div className="right">
        <div className={location !== "/" ? "hidden" : "info"} onClick={() => dispatch(changeCartVisibility())}>
          <i className="fas fa-shopping-cart fa-lg" />
          {shoppingCart.items.length}
        </div>
        <div className={location !== "/" ? "hidden" : "info"} onClick={() => dispatch(setOpen())}>
          <i className="fas fa-money-bill fa-lg" />
          {user.balance.toFixed(2) + " ₺"}
        </div>
        <div className={location !== "/" ? "hidden" : "info"}>
          <i className="fas fa-gift fa-lg" />
          {user.rewards.toFixed(2) + " ₺"}
        </div>
        <div className={location !== "/" ? "hidden" : "info"}>
          <React.Fragment>
            <Link to="/orders">
              <i className="fas fa-box fa-lg" /> {"Geçmiş Siparişler"}
            </Link>
          </React.Fragment>
        </div>
        <div className="info" style={{ display: user.role === "Admin" ? "flex" : "none" }}>
          {location === "/" ? (
            <React.Fragment>
              <Link to="/admin">
                <i className="fas fa-users-cog fa-lg" /> {"Admin Paneli"}
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/">
                <i className="fas fa-home fa-lg" />
                {"Anasayfa"}
              </Link>
            </React.Fragment>
          )}
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
