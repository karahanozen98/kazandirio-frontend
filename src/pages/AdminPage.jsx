import React from "react";
import Navbar from "../components/Navbar";
import ManageCategories from "../components/ManageCategories";
import ManageProducts from "../components/ManageProducts";

class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <ManageCategories />
        </section>
        <section>
          <ManageProducts />
        </section>
      </div>
    );
  }
}

export default AdminPage;
