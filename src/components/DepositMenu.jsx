import { Button, Backdrop } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import colors from "../styled/colors";
import { makeStyles } from "@material-ui/core/styles";
import { setOpen } from "../redux/depositMenu";
import { setUser } from "../redux/userReducer";
import { Open, severities } from "../redux/toast";
import { UpdateBalance } from "../api/UserService";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function DepositMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.depositMenu.open);
  const user = useSelector((state) => state.user);

  const handleDeposit = async (amount) => {
    const response = await UpdateBalance(user.id, amount);
    if (!response.error) {
      dispatch(Open({ message: "İşlem başarılı", severity: severities.success }));
      dispatch(setUser({ ...user, balance: user.balance + amount }));
      dispatch(setOpen());
    } else {
      dispatch(Open({ message: response.data, severity: severities.error }));
      dispatch(setOpen());
    }
  };

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <DepositMenuWrapper>
        <header className="header">
          <h3>💰 Hesabına Para Yükle</h3>
          <i className="fas fa-times" onClick={() => dispatch(setOpen())} />
        </header>

        <section>
          <div>
            <i className="fas fa-money-bill fa-3x"></i>
            <h3>10 ₺</h3>
          </div>
          <Button variant="contained" onClick={() => handleDeposit(10)}>
            Yükle
          </Button>
        </section>
        <section>
          <div>
            <i className="fas fa-money-bill fa-3x"></i>
            <h3>20 ₺</h3>
          </div>
          <Button variant="contained" onClick={() => handleDeposit(20)}>
            Yükle
          </Button>
        </section>
        <section>
          <div>
            <i className="fas fa-money-bill fa-3x"></i>
            <h3>50 ₺</h3>
          </div>
          <Button variant="contained" onClick={() => handleDeposit(50)}>
            Yükle
          </Button>
        </section>
        <section>
          <div>
            <i className="fas fa-money-bill fa-3x"></i>
            <h3>100 ₺</h3>
          </div>
          <Button variant="contained" onClick={() => handleDeposit(100)}>
            Yükle
          </Button>
        </section>
      </DepositMenuWrapper>
    </Backdrop>
  );
}

const DepositMenuWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 20px 40px;
  border-radius: 5px;
  z-index: 100;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    i {
      margin: 0px 20px;
      padding: 10px;
      &:hover {
        background-color: #ddd;
      }
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;

    div {
      display: flex;
      align-items: center;
    }
    i {
      color: ${colors.success};
      margin: 10px;
    }
  }
  @media (max-width:700px){
    width: 70%;
  }
`;
export default DepositMenu;
