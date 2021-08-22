import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PaymentModalWrapper from "../styled/PaymentModalWrapper";
import { Backdrop, Button } from "@material-ui/core";
import { PayWithBalance, PayWithRewards } from "../api/OrderService";
import { setUser } from "../redux/userReducer";
import { Open, severities } from "../redux/toast";
import { removeAll, changeCartVisibility } from "../redux/shoppingCart";
import { LoginWithToken } from "../api/UserService";
import ProductDetails from "./ProductDetails";
import TableWrapper from "../styled/TableWrapper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    overflow: "auto",
  },
}));

function PaymentModal() {
  const classes = useStyles();
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
    if (!shoppingCart.items.length) {
      dispatch(Open({ message: "Sepetinizde ürün yok", severity: severities.warning }));
      return;
    }
    const productList = shoppingCart.items.map((item) => item.id);
    const response = await PayWithBalance(user.token, user.id, productList);

    if (!response.error) {
      cleanUpAfterPayment();
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  const payWithRewards = async () => {
    if (!shoppingCart.items.length) {
      dispatch(Open({ message: "Sepetinizde ürün yok", severity: severities.warning }));
      return;
    }
    const productList = shoppingCart.items.map((item) => item.id);
    const response = await PayWithRewards(user.token, user.id, productList);

    if (!response.error) {
      cleanUpAfterPayment();
    } else dispatch(Open({ message: response.data, severity: severities.error }));
  };

  return (
    <Backdrop className={classes.backdrop} open={shoppingCart.open}>
      <PaymentModalWrapper>
        <div className="close">
          <h2>
            <i className="fas fa-shopping-cart"></i>Sepetim
          </h2>
          <Button className="btn" onClick={() => dispatch(changeCartVisibility())}>
            <i className="far fa-window-close fa-2x"></i>
          </Button>
        </div>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Ürün Görseli</th>
                <th>Ürün Adı</th>
                <th>Fiyat</th>
                <th>KazandiRio Puan</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.items.map((product) => {
                return <ProductDetails key={product.id} product={product} />;
              })}
            </tbody>
          </table>
        </TableWrapper>
        <h3>{"Toplam Tutar: " + totalPrice.toFixed(2) + " TL"}</h3>
        <h3>{"Toplam KazandiRio Puan: " + totalRewards.toFixed(2) + " TL"}</h3>
        <div className="buttons">
          <Button variant="contained" className="primary" onClick={payWithBalance}>
            Alışverişi Tamamla <i className="fas fa-credit-card fa-lg"></i>
          </Button>
          <Button variant="contained" className="secondary" onClick={payWithRewards}>
            Hediye paraları kullan<i className="fas fa-gift fa-lg"></i>
          </Button>
        </div>
      </PaymentModalWrapper>
    </Backdrop>
  );
}
export default PaymentModal;
