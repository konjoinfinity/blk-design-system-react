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
import { Container } from "reactstrap";

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
        <div className="content-center brand">
          <h1 className="h1-seo">TOXIC BAEBEE NFTS</h1>
          <h4 className="d-none d-sm-block">
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
          </h4>
      </div>
      </Container>
    </div>
  );
}
