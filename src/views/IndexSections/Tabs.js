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
import { Container, Card, CardBody, CardTitle } from "reactstrap";

export default function Tabs() {
  return (
    <section className="section section-lg">
      <section className="section">
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <h1 style={{ textAlign: "center", padding: "10vh"}}>Specifications</h1>
        <Container style={{marginBottom: "10vh"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            
            }}
          >
            <img
              alt={"toxic baebees"}
              src={require("./toxbbs.png")}
              style={{ height: "55vh", marginRight: "2vh" }}
            />

      
            

            <Card className="card-stats" style={{ marginRight: "2vh", height: "50vh"}}>
              <CardBody>
                <div className="icon-big text-center icon-warning">
                  <img
                    style={{ height: "5vh", width: "5vh" }}
                    alt={"toxic baebees"}
                    src={require("./userw.png")}
                  />
                </div>

                <div className="numbers">
                  <CardTitle tag="p" style={{ textAlign: "left" }}>
                    Characters
                  </CardTitle>

                  <p className="card-category" style={{ textAlign: "left" }}>
                    Each unique Baebee is designed by our creative team that
                    generates over 170 Possible traits. These include but are
                    not limited to expression, headwear, and clothing. We
                    developed 4000 Toxic Baebees are 2D, 1000 Toxic Baebee are
                    Pixelated, And 7 Limited Toxic Baebee Edition are 3D.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="card-stats" style={{ marginRight: "2vh", height: "50vh"}}>
              <CardBody>
                <div className="icon-big text-center icon-warning">
                  <img
                    style={{ height: "5vh", width: "5vh" }}
                    alt={"toxic baebees"}
                    src={require("./polygonw.png")}
                  />
                </div>

                <div className="numbers">
                  <CardTitle tag="p" style={{ textAlign: "left" }}>
                    ERC-721
                  </CardTitle>
                  <p />
                  <p className="card-category" style={{ textAlign: "left" }}>
                    The Baebees NFT Contract that governs ownership is a
                    standard ERC-721 compatible with any service or exchange.
                    Purchasing Baebee NFT costs 25/50 MATIC - POLYGON, and 3D
                    costs 0.2 ETH.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="card-stats" style={{ height: "50vh"}}>
              <CardBody>
                <div className="icon-big text-center icon-warning">
                  <img
                    style={{ height: "5vh", width: "5vh" }}
                    alt={"toxic baebees"}
                    src={require("./cardw.png")}
                  />
                </div>

                <div className="numbers">
                  <CardTitle tag="p" style={{ textAlign: "left" }}>
                    Utility
                  </CardTitle>
                  <p />
                  <p className="card-category" style={{ textAlign: "left" }}>
                    {" "}
                    Baebees NFTs are exchangeable for ReautyCoin (ERC-20 Token).
                    We allow our NFT owner to convert their NFT To our
                    ReautyCoin. Please check the ReautyDAO page to learn more.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>
    </section>
  );
}
