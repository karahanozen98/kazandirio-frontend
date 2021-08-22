import React from "react";
import Navbar from "../components/Navbar";
import ManageCategories from "../components/ManageCategories";
import ManageUsers from "../components/ManageUsers";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import colors from "../styled/colors";
import ManageProducts from "../components/ManageProducts";

class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
    };
  }
  changeTab(index) {
    this.setState({ tabIndex: index });
  }

  render() {
    return (
      <AdminPageWrapper>
        <Navbar />
        <div className="container">
          <div className="options">
            <ul>
              <li>
                <Button onClick={() => this.changeTab(0)}>
                  <i className="fas fa-box"></i>
                  Ürün Yönetimi
                </Button>
              </li>
              <li>
                <Button onClick={() => this.changeTab(1)}>
                  <i className="fas fa-layer-group"></i>
                  Kategori Yönetimi
                </Button>
              </li>
              <li>
                <Button onClick={() => this.changeTab(2)}>
                  <i className="fas fa-user"></i>
                  Kullanıcı Yönetimi
                </Button>
              </li>
            </ul>
          </div>
          <div className="tabs">
            {this.state.tabIndex === 0 && (
              <section>
                <ManageProducts />
              </section>
            )}
            {this.state.tabIndex === 1 && (
              <section>
                <ManageCategories />
              </section>
            )}

            {this.state.tabIndex === 2 && (
              <section>
                <ManageUsers />
              </section>
            )}
          </div>
        </div>
      </AdminPageWrapper>
    );
  }
}

export default AdminPage;

const AdminPageWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    align-items: stretch;
  }
  .options {

    background-color: ${colors.gray};
    padding: 20px;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .tabs {
    width: 100%;
  }
`;
