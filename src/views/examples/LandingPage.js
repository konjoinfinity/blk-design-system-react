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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header header-filter">

          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="h1-seo">TOXIC BAEBEE NFTS</h1>
                <p className="text-white mb-3">
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
                  style={{ height: "30vh", width: "30vh" }}
                  alt={"toxic baebees"}
                  src={require("./example.gif")}
                />
              </Col>
            </Row>
          </div>
        </div>
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
                        className="nav-link d-none d-lg-block"
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
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container stlye={{ marginBottom: "30vh" }}>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Col md="12">
                    <div className="pl-md-5">
                      <h1>Specifications</h1>
                    </div>
                  </Col>
                  <Row>
                    <Col className="px-2 py-2" lg="12" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <img
                                  style={{ height: "5vh", width: "5vh" }}
                                  alt={"toxic baebees"}
                                  src={require("./userw.png")}
                                />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle
                                  tag="p"
                                  style={{ textAlign: "left" }}
                                >
                                  The Characters
                                </CardTitle>

                                <p
                                  className="card-category"
                                  style={{ textAlign: "left" }}
                                >
                                  Each unique Baebee is designed by our creative
                                  team that generates over 170 Possible traits.
                                  These include but are not limited to
                                  expression, headwear, and clothing. We
                                  developed 4000 Toxic Baebees are 2D, 1000
                                  Toxic Baebee are Pixelated, And 7 Limited
                                  Toxic Baebee Edition are 3D.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="12" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <img
                                  style={{ height: "5vh", width: "5vh" }}
                                  alt={"toxic baebees"}
                                  src={require("./polygonw.png")}
                                />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle
                                  tag="p"
                                  style={{ textAlign: "left" }}
                                >
                                  ERC-721
                                </CardTitle>
                                <p />
                                <p
                                  className="card-category"
                                  style={{ textAlign: "left" }}
                                >
                                  The Baebees NFT Contract that governs
                                  ownership is a standard ERC-721 compatible
                                  with any service or exchange. Purchasing
                                  Baebee NFT costs 25/50 MATIC - POLYGON, and 3D
                                  costs 0.2 ETH.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="12" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <img
                                  style={{ height: "5vh", width: "5vh" }}
                                  alt={"toxic baebees"}
                                  src={require("./cardw.png")}
                                />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle
                                  tag="p"
                                  style={{ textAlign: "left" }}
                                >
                                  Utility
                                </CardTitle>
                                <p />
                                <p
                                  className="card-category"
                                  style={{ textAlign: "left" }}
                                >
                                  {" "}
                                  Baebees NFTs are exchangeable for ReautyCoin
                                  (ERC-20 Token). We allow our NFT owner to
                                  convert their NFT To our ReautyCoin. Please
                                  check the ReautyDAO page to learn more.
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Meet The Characters</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <img src={require("./Unreal.png")} alt="unreal" />
                      </div>
                      <h4 className="info-title">Unreal Baebee</h4>
                      <hr className="line-primary" />
                      <p>
                        As technology continues connecting us, people are
                        increasingly investing in appearances. While it's
                        exciting to have the freedom to express ourselves
                        through fashion, it can also be harmful. Instead of
                        being blinded by trends and clickbait images, we should
                        focus on maintaining our natural beauty. Let's remind
                        each other that authenticity is the most beautiful thing
                        we can possess.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <img src={require("./Vampire.png")} alt="Vampire" />
                      </div>
                      <h4 className="info-title">Contaminated Baebee</h4>
                      <hr className="line-warning" />
                      <p>
                        It's shocking to think how much harm some beauty
                        products and non-biodegradable packaging can do to the
                        environment. It's time for beauty brands to step up and
                        take action by transitioning to more eco-friendly
                        alternatives. It's up to us as consumers to demand this
                        shift, and we can use our voices to show brands which
                        practices we support and which we don't.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <img src={require("./Zombie.png")} alt="Zombie" />
                      </div>
                      <h4 className="info-title">Poisoned Baebee</h4>
                      <hr className="line-success" />
                      <p>
                        As consumers, we're all constantly faced with many
                        choices about what we buy and put in our bodies. But
                        many beauty products are filled with harmful chemicals
                        that can affect our health. And their advertising
                        slogans, designed to appeal to our vanity, are corroding
                        our minds. We're sick of being brainwashed into
                        believing that these products are harmless. It's time to
                        change this. Let's start by choosing brands that use
                        safe, natural ingredients.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <img src={require("./Frida1.png")} alt="Frida" />
                      </div>
                      <h4 className="info-title">Mask Baebee</h4>
                      <hr className="line-primary" />
                      <p>
                        What used to be a diverse and inclusive global society
                        is slowly disappearing. Everyone seems to be wearing the
                        same mask, conforming to what the mainstream likes, and
                        losing their individuality. This is a dangerous trend;
                        if we don't act now, we will lose the things that make
                        us unique. Let's celebrate our differences and preserve
                        our individuality.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <img src={require("./Clown.png")} alt="clown" />
                      </div>
                      <h4 className="info-title">Joker Baebee</h4>
                      <hr className="line-warning" />
                      <p>
                        Exaggerated advertisements and deformed aesthetics have
                        created real-life clowns. The innocence and charm that
                        once distinguished these statues have been replaced by
                        pain and fear. Plastic surgery went wrong, and the
                        poisoning of harmful cosmetics has turned the victim
                        into just another joker.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <img src={require("./Fire.png")} alt="fire" />
                      </div>
                      <h4 className="info-title">Fire Baebee</h4>
                      <hr className="line-success" />
                      <p>
                        Sometimes, it feels like we're wasting our time and
                        energy on fake beauty info, misleading ads, and failed
                        trials. It doesn't help that the flames of anger come up
                        when you get upset. But it's important to remember that
                        we're not alone. We can all support each other as we
                        navigate this crazy beauty industry.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <section className="section section-lg section-safe">
            <Container>
              <Row className="justify-content-center">
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
                        <h4 className="info-title">Reauty DAO</h4>
                        <hr className="line-primary" />
                        <p>
                          Reauty DAO community empowers all members with
                          ownership, control, and monetization of their
                          beauty-relevant data. Overall, community members have
                          the power to build a new order in the beauty industry
                          with transparency, inclusiveness, and authenticity
                          supported by blockchain technology!
                          <br />
                          <br />
                          Creating a truly decentralized and trustworthy beauty
                          community is vital for every beauty stakeholder
                          worldwide, and we're excited to lead this disruptive
                          beauty transformation.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <img src={require("./3d1.gif")} alt="Vampire" />
                        </div>
                        <h4 className="info-title">Why NFTs?</h4>
                        <hr className="line-warning" />
                        <p>
                          The beauty industry needs to do better. We see
                          firsthand how misleading marketing claims, exaggerated
                          claims, and unrealistic expectations lead to unhealthy
                          choices for our customers. That's why we're launching
                          the first NFT series: Toxic Baebaee! Each variation is
                          entirely customizable with 3D, Pixelated, and 2D so
                          you can choose the best look. This NFT series will
                          help raise awareness of the toxic beauty industry
                          while empowering consumers to make healthier choices.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./3d3.gif")} alt="Zombie" />
                        </div>
                        <h4 className="info-title">
                          NFT Purchase = DAO Membership
                        </h4>
                        <hr className="line-success" />
                        <p>
                          It's Halloween season, and we're celebrating by
                          slashing prices on Toxic Baebee NFTs from midnight on
                          31st Oct 2022 until 30th Nov 2022!
                          <br />
                          <br />
                          The first 100 Toxic Baebee NFT owners will get 0.1 ETH
                          worth of Reauty DAO membership, giving them access to
                          all the community privileges and powers to improve the
                          web3 beauty community. Don't miss out on this spooky
                          deal!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Recent Mints</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/_v-_d-QcL3fB2j96ZxUopcsHwr5WljtdzqIBRp42HRqlq-66d0Fp71aUfKPvhrzX6AoCRP6rc_rIEwqWsoZeRr-uqrWRm6zqP7PdonE?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #1</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/Yst4YG30_k7JxMUJ0E8g9jvdfEHz19Sxioye0L59VxifdtbWRiipnv062qwaRvlL9_C2fKxA8VmfjtjJ8VIb627wmmHQdr_rBh28dw?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Pixelated Toxic Baebee #1
                        </h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/tWeVD95U92BTHewJVhuJKEKGlPqhPnYreD4sPgRSyqtvLe8Al4WqNQxVVnF-LK3i24DrGg5fhBDsYXlUtV_Oww6t3kVz25bfFuvB?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #2</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
