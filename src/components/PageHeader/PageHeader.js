/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
      <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="h1-seo">TOXIC BAEBEE NFTS</h1>
                <p className="text-white mb-1">
                  The beauty industry lacks transparency and regulation. Beauty
                  consumers are frustrated with misleading information And
                  exaggerated marketing claims.
                  <br />
                  <br />
                  This deceptive industry which idolizes the "Skinny And Beauty
                  Culture," leads many customers to obtain unnecessary plastic
                  surgery, unhealthy eating habits, and unknowingly use beauty
                  products with toxic ingredients.
                  <br />
                  <br />
                  The "Toxic Baebee" NFT Series was designed to generate public
                  awareness by illustrating the "Toxic Side Of Beauty."
                </p>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="primary"
                    >
                      <i className="tim-icons icon-spaceship" /> MINT - x MATIC
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  style={{ maxHeight: "30vh", maxWidth: "30vh" }}
                  alt={"toxic baebees"}
                  src={require("./example.gif")}
                />
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  );
}
