import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/userReducer";
import { setOpen as openDepositMenu } from "../redux/depositMenu";
import { changeCartVisibility } from "../redux/shoppingCart";
import { useLocation } from "react-router";

function MobileLinks({ open, setOpen }) {
  const location = useLocation().pathname;
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(resetUser());
    localStorage.removeItem("authtoken");
  };

  return (
    <div className={open ? "mobile-links open" : "mobile-links"}>
      <div className={"info"} onClick={() => setOpen(false)}>
        <i className="fas fa-times fa-lg" />
        Menüyü Kapat
      </div>
      <div className={location !== "/" ? "hidden" : "info"} onClick={() => dispatch(changeCartVisibility())}>
        <i className="fas fa-shopping-cart fa-lg" />
        {shoppingCart.items.length}
      </div>
      <div className={location !== "/" ? "hidden" : "info"} onClick={() => dispatch(openDepositMenu())}>
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
  );
}
export default MobileLinks