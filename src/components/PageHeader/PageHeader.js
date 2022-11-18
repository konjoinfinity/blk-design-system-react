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

import React, { useEffect, useState } from "react";
// reactstrap components
import { Button, Container, Row, Col, Alert } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Contract from "web3-eth-contract";
import Web3 from "web3";
import { ethers } from "ethers";


const { ethereum } = window;
Contract.setProvider(ethereum);
let web3 = new Web3(ethereum);
let provider = {};
if (window.ethereum && window.ethereum.isMetaMask) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
}

let txreceipt = "";
let gasPrice = 0;
let lastBaseFeePerGas = 0;
let maxFeePerGas = 0;
let maxPriorityFeePerGas = 0;

export default function PageHeader() {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNFT, setClaimingNFT] = useState(false);
  const [show2Dmint, setShow2Dmint] = useState(true);
  const [showPixelmint, setShowPixelmint] = useState(true);
  const [feedback, setFeedback] = useState(
    `Click to mint your Beauty Baebee NFT`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const onDismiss = () => setVisible(false);
  const onTrigger = () => setVisible(true);

  const claimNFTs = async (a) => {
    let cost = 0;
    let contractAddress = "";
    // eslint-disable-next-line
    if (a == true) {
      cost = 50000000000000000000;
      contractAddress = "0x527F243B04fcaDaA6f6244F65d451bDeA8cBFa92";
    } else {
      cost = CONFIG.WEI_COST;
      contractAddress = CONFIG.CONTRACT_ADDRESS;
    }
    //let cost = CONFIG.WEI_COST;
    // let gasLimit = CONFIG.GAS_LIMIT;
    let gasLimit = lastBaseFeePerGas;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit);
    setClaimingNFT(true);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // console.log(abiResponse);
    const abi = await abiResponse.json();
    // console.log(abi);
    var contract = new Contract(abi, CONFIG.CONTRACT_ADDRESS);
    try {
      await web3.eth
        .sendTransaction({
          from: blockchain.account,
          to: contractAddress,
          data: contract.methods.mint(mintAmount).encodeABI(),
          gasLimit: String(totalGasLimit),
          value: totalCostWei,
        })
        .once("error", (err) => {
          if (visible === false) {
            onTrigger();
          }
          setFeedback(err.message);
          // console.log(err);
          setClaimingNFT(false);
        })
        .then((receipt) => {
          // console.log(receipt);
          txreceipt = "data";
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it ==> `
          );
          setClaimingNFT(false);
          dispatch(fetchData(blockchain.account));
          // console.log(blockchain);
        });
    } catch (err) {
      // console.log(err);
    }
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setFeedback("Wallet connected, click 'MINT' to mint an NFT.");
      // console.log(show2Dmint);
      // console.log(showPixelmint);
    }
    // window.open("https://metamask.app.link/send/0x12E4c6b6Be904055FF15283C82bE1d941a427f7A@137?value=5e19");
    //var isSafari = window.safari !== undefined;
    //if (isSafari) // console.log("Safari, yeah!");
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    async function getFee() {
      if (window.ethereum && window.ethereum.isMetaMask) {
        let feeData = await provider.getFeeData();
        // console.log(feeData);
        gasPrice = Number(
          String(web3.utils.toNumber(feeData.gasPrice._hex)).slice(0, -4)
        );
        lastBaseFeePerGas = Number(
          String(web3.utils.toNumber(feeData.lastBaseFeePerGas._hex)).slice(
            0,
            -4
          )
        );
        maxFeePerGas = Number(
          String(web3.utils.toNumber(feeData.maxFeePerGas._hex)).slice(0, -4)
        );
        maxPriorityFeePerGas = Number(
          String(web3.utils.toNumber(feeData.maxPriorityFeePerGas._hex)).slice(
            0,
            -4
          )
        );
        // console.log(gasPrice);
        // console.log(lastBaseFeePerGas);
        // console.log(maxFeePerGas);
        // console.log(maxPriorityFeePerGas);
      }
    }
    getFee();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  return (
    <div>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1 style={{marginTop: "5vh"}} className="h1-seo">TOXIC BAEBEE NFTS</h1>
                  <p
                    className="text-white mb-1"
                    style={{ textAlign: "center" }}
                  >
                    The beauty industry lacks transparency and regulation.
                    Beauty consumers are frustrated with misleading information
                    And exaggerated marketing claims.
                    <br />
                    <br />
                    This deceptive industry which idolizes the "Skinny And
                    Beauty Culture," leads many customers to obtain unnecessary
                    plastic surgery, unhealthy eating habits, and unknowingly
                    use beauty products with toxic ingredients.
                    <br />
                    <br />
                    The "Toxic Baebee" NFT Series was designed to generate
                    public awareness by illustrating the "Toxic Side Of Beauty."
                  </p>
                </div>
                {/* eslint-disable-next-line */}
                {show2Dmint == true ? (
                  <div>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          The sale has ended.
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </p>
                        <br />
                        <a rel={"nofollow"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </a>
                      </>
                    ) : (
                      <>
                        <br />
                        <br />
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <Alert
                                  color="info"
                                  isOpen={visible}
                                  toggle={onDismiss}
                                >
                                  {blockchain.errorMsg}
                                </Alert>
                              </>
                            ) : null}
        
                            <br />
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect(false));
                                getData();
                                setShowPixelmint(false);
                                if (visible === false) {
                                  onTrigger();
                                }
                              }}
                            >
                              Connect Your Wallet
                            </Button>
                          </div>
                        ) : (
                          <>
                            {feedback !==
                            `Click to mint your Beauty Baebee NFT` ? (
                              <Alert
                                color="info"
                                isOpen={visible}
                                toggle={onDismiss}
                              >
                                {feedback}
                              </Alert>
                            ) : (
                              ""
                            )}
                            {txreceipt !== "" ? (
                              <a
                                href={
                                  "https://opensea.io/collection/toxic-baebee-nft-series"
                                }
                                rel="nofollow"
                              >
                                Opensea
                              </a>
                            ) : (
                              ""
                            )}
                            
                            <br />
                            {/* eslint-disable-next-line */}
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: "row",
                                display: "flex",
                    
                              }}
                            >
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <RemoveIcon />
                              </Button>
                              <p
                                style={{
                                  textAlign: "center",
                                  color: "primary",
                                  fontSize: "25px",
                                }}
                              >
                                {mintAmount}
                              </p>
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <AddIcon />
                              </Button>
                            </div>
                            <br />
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs(false);
                                  getData();
                                  setFeedback("Approve transaction to mint");
                                  if (visible === false) {
                                    onTrigger();
                                  }
                                }}
                              >
                                {claimingNFT
                                  ? "MINTING..."
                                  : `MINT - ${25 * mintAmount} MATIC`}
                              </Button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  ""
                )}
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

      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    className="display-3 text-white"
                    style={{ textAlign: "center" }}
                  >
                    PIXELATED TOXIC BAEBEE NFTS
                  </h3>
                  <p
                    className="text-white mb-3"
                    style={{ textAlign: "center" }}
                  >
                    We're so excited to introduce our new pixelated Toxic Baebee
                    NFT series - Limited to 1000 total NFTs, The Pixelated
                    variation better illustrates the beauty industry's lack of
                    transparency, and it's filled with misleading marketing
                    claims, unrealistic expectations, and harmful ingredients
                    that risk our health. This NFT series aims to raise
                    awareness of "Toxic Side of Beauty."
                  </p>
                </div>
                {/* eslint-disable-next-line */}
                {showPixelmint == true ? (
                  <div>
                    {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                      <>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          The sale has ended.
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          You can still find {CONFIG.NFT_NAME} on
                        </p>
                        <br />
                        <a rel={"nofollow"} href={CONFIG.MARKETPLACE_LINK}>
                          {CONFIG.MARKETPLACE}
                        </a>
                      </>
                    ) : (
                      <>
                        <br />
                        <br />
                        {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                            }}
                          >
                            {blockchain.errorMsg !== "" ? (
                              <>
                                <Alert
                                  color="info"
                                  isOpen={visible}
                                  toggle={onDismiss}
                                >
                                  {blockchain.errorMsg}
                                </Alert>
                              </>
                            ) : null}
                          
                            <br />
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect(true));
                                getData();
                                setShow2Dmint(false);
                                if (visible === false) {
                                  onTrigger();
                                }
                              }}
                            >
                              Connect Your Wallet
                            </Button>
                          </div>
                        ) : (
                          <>
                            {feedback !==
                            `Click to mint your Beauty Baebee NFT` ? (
                              <Alert
                                color="info"
                                isOpen={visible}
                                toggle={onDismiss}
                              >
                                {feedback}
                              </Alert>
                            ) : (
                              ""
                            )}
                            {txreceipt !== "" ? (
                              <a
                                href={
                                  "https://opensea.io/collection/toxic-baebee-pixelated"
                                }
                                rel="nofollow"
                              >
                                Opensea
                              </a>
                            ) : (
                              ""
                            )}
                            <br />
                            {/* eslint-disable-next-line */}
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <RemoveIcon />
                              </Button>
                              <p
                                style={{
                                  textAlign: "center",
                                  color: "primary",
                                  fontSize: "25px",
                                }}
                              >
                                {mintAmount}
                              </p>
                              <Button
                                color="info"
                                style={{ padding: "1.5em" }}
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <AddIcon />
                              </Button>
                            </div>
                            <br />
                            <div
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                display: "flex",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={claimingNFT ? true : false}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs(true);
                                  getData();
                                  setFeedback("Approve transaction to mint");
                                  if (visible === false) {
                                    onTrigger();
                                  }
                                }}
                              >
                                {claimingNFT
                                  ? "MINTING..."
                                  : `MINT - ${50 * mintAmount} MATIC`}
                              </Button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Row>
              <Col xl="auto" lg="auto">
                <img
                  style={{ height: "30vh", width: "30vh", marginLeft: "15vh" }}
                  alt={"toxic baebees"}
                  src={require("./pixelated.gif")}
                />
              </Col>
              </Row>
            </Row>
        </Container>
      </div>
    </div>
  );
}
