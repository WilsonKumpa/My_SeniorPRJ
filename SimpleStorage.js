import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import SimpleStorage_abi from "./.../SimpleStorage_abi.json"; //smartcontract abi จาก Remix.IDE
import "./SimpleStorage.css"; //CSS เพื่อความสวยงาม

const SimpleStorage = () => {
  let contractAddress = "0x..."; //Contract address ของเราหลังจากDeploy

  let [key, setKey] = useState("");
  let [totals, setTotals] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [currentContractVal, setCurrentContractVal] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [array, setArray] = useState([]);

  const connectWalletHandler = () => { //function จัดการเกี่ยวกับ metamask wallet การเชื่อมต่อ/ขอwallet address
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const accountChangedHandler = (newAccount) => { //functionเปลี่ยนwallet addressที่connect
    setDefaultAccount(newAccount);
    updateEthers();
  };

  const chainChangedHandler = () => { //functionเปลี่ยนChainที่connect
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      SimpleStorage_abi,
      tempSigner
    );
    setContract(tempContract);
  };

  const getCurrentVal = async () => { //function ใช้รับค่าที่บันทึกล่าสุดบนblockchain
    let val = await contract.get();
    setCurrentContractVal(val);
  };

  const setHandler = async (event) => { //function ใช้รับค่าข้อมูลจาก Flask Local Server
    event.preventDefault();
    try { 
      const response = await fetch("http://192.XXX.XXX.XX:5000/"); //เปลี่ยน https ตาม Rpi IP address (fetch จาก Flask local server)
      const data = await response.json();
      setArray(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const setHandlerr = (event) => { //functionที่ใช้บันทึกค่าลงบนblockchain
    event.preventDefault();
    console.log("sending " + event.target.setText.value + " to the contract");
    contract.set(event.target.setText.value);
  };

  return (
    <div className="entire">
      <br></br>
      <h4 className="connect"> {"Connect your wallet FIRST!"} </h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div>
        <h3>Connected Address: {defaultAccount}</h3>
      </div>
      <div>
        <button onClick={setHandler} style={{ marginTop: "2em" }}>
          {" "}
          Get Current Value{" "}
        </button>
      </div>
      <div>
        {" "}
        <p>{array[0]}</p>
        <p>{array[1]}</p>
        <p>{array[2]}</p>
      </div>

      <div>
        Total data = {array[0]} {array[1]} {array[2]}
      </div>
      <p>{""}</p>
      <div className="textt">↓ Place your Total data HERE ↓ </div>
      <form onSubmit={setHandlerr}>
        <input
          id="setText"
          type="text"
          placeholder=" Temp :X°C  ,Humid:X% ,SmartContractState :X"
          size={42}
        />
        <br></br>
        <button type={"submit"} style={{ marginTop: "1em" }} className="bigg">
          {" "}
          Save to Blockchain{" "}
        </button>
      </form>
      <div>
        <button onClick={getCurrentVal} style={{ marginTop: "1em" }}>
          Last saved{" "}
        </button>
      </div>
      {currentContractVal}
      {errorMessage}
    </div>
  );
};

export default SimpleStorage;
