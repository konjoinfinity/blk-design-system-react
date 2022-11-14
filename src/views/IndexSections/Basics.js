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
  Row,
  Col
} from "reactstrap";

export default function Basics() {
  return (
    <div>
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="wrapper">
          <div className="page-header">
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="h1-seo">PIXELATED TOXIC BAEBEE NFTS</h1>
                  <p className="text-white mb-3">
                    We're so excited to introduce our new pixelated Toxic Baebee
                    NFT series - Limited to 1000 total NFTs, The Pixelated
                    variation better illustrates the beauty industry's lack of
                    transparency, and it's filled with misleading marketing
                    claims, unrealistic expectations, and harmful ingredients
                    that risk our health. This NFT series aims to raise
                    awareness of "Toxic Side of Beauty."
                  </p>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        color="primary"
                      >
                        <i className="tim-icons icon-spaceship" /> MINT - x
                        MATIC
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    style={{ height: "30vh", width: "30vh" }}
                    alt={"toxic baebees"}
                    src={require("./pixelated.gif")}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
    </div>
  );
}
