import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/ProductsList";
import PaymentModal from "../components/PaymentModal";
import DepositMenu from "../components/DepositMenu";

function HomePage() {
  return (
    <div>
      <DepositMenu />
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <PaymentModal />
        <Product />
      </div>
    </div>
  );
}

export default HomePage;
