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
import { Container, Row, Col, Button } from "reactstrap";

export default function Typography() {
  return (
    <section className="section section-lg section-safe">
            <Container>
              <Row className="justify-content-center" style={{marginBottom: "10vh"}}>
                <Col lg="12">
                  <h1 className="text-center">
                    3D TOXIC BAEBEES - LIMITED EDITION
                  </h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <img src={require("./3d.gif")} alt="unreal" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="primary">
                      <i className="tim-icons icon-spaceship" /> Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <img src={require("./3d1.gif")} alt="Vampire" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="primary">
                      <i className="tim-icons icon-spaceship" /> Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./3d3.gif")} alt="Zombie" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="primary">
                      <i className="tim-icons icon-spaceship" /> Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
  );
}
