import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PaymentModalWrapper from "../styled/PaymentModalWrapper";
import { Button } from "@material-ui/core";
import { PayWithBalance, PayWithRewards } from "../api/OrderService";
import { setUser } from "../redux/userReducer";
import { Open, severities } from "../redux/toast";
import { removeAll, changeCartVisibility } from "../redux/shoppingCart";
import { LoginWithToken } from "../api/UserService";
import ProductDetails from "./ProductDetails";

function PaymentModal() {
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  let totalPrice = 0;
  let totalRewards = 0;

  for (let i = 0; i < shoppingCart.items.length; i++) {
    const item = shoppingCart.items[i];
    totalPrice += item.price;
    if (item.category) totalRewards += item.category.rewardAmount;
  }
  const cleanUpAfterPayment = async () => {
    const getUpdatedUser = await LoginWithToken(user.token);
    dispatch(setUser({ ...getUpdatedUser.data }));
    dispatch(removeAll());
    dispatch(changeCartVisibility());
    dispatch(Open({ message: "İşlem başarılı", severity: severities.success }));
  };

  const payWithBalance = async () => {
    const productList = shoppingCart.items.map((item) => item.id);
    const response = await PayWithBalance(user.token, user.id, productList);

    if (!response.error) {
      cleanUpAfterPayment();
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  const payWithRewards = async () => {
    const productList = shoppingCart.items.map((item) => item.id);
    const response = await PayWithRewards(user.token, user.id, productList);

    if (!response.error) {
      cleanUpAfterPayment();
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  return (
    <PaymentModalWrapper style={{ display: shoppingCart.open ? "block" : "none" }}>
      <div className="close">
        <h2>
          <i className="fas fa-shopping-cart"></i>Sepetim
        </h2>
        <div className="btn" onClick={() => dispatch(changeCartVisibility())}>
          Alışverişe Dön <i className="far fa-window-close fa-lg"></i>
        </div>
      </div>
      {shoppingCart.items.map((product) => {
        return <ProductDetails key={product.id} product={product} />;
      })}
      <h3>{"Toplam Tutar: " + totalPrice.toFixed(2) + " TL"}</h3>
      <h3>{"Toplam KazandiRio Puan: " + totalRewards.toFixed(2) + " TL"}</h3>
      <Button variant="contained" color="primary" onClick={payWithBalance}>
        Alışverişi Tamamla <i className="fas fa-credit-card fa-lg"></i>
      </Button>
      <Button variant="contained" color="secondary" onClick={payWithRewards}>
        Hediye paraları kullan<i className="fas fa-gift fa-lg"></i>
      </Button>
    </PaymentModalWrapper>
  );
}
export default PaymentModal;
