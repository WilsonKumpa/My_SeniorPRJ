import React, { useState, useEffect } from "react";
import { Contract, providers, utils } from "ethers";
import "./SimpleStorage.css"; //css เพื่อความสวยงาม

const abi = [...]; //Contract abi ในส่วนสลับตัวแปร
const contractAddress = "0x..."; //Contract address ในส่วนสลับตัวแปร ที่Deployแล้ว

const ContractToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => { //ใช้รับค่าตัวแปรจากfunctionในSmart contractสลับตัวแปร
    const fetchData = async () => {
      const provider = new providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);
      const state = await contract.isOn();
      setIsOn(state);
      const state2 = await contract.isUser();
      setIsUser(state2);
    };
    fetchData();
  }, []);

  const handleClick = async () => { //ใช้ทำธุรกรรมsmartcontractเพื่อเปลี่ยนสถานะตัวแปร
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new Contract(contractAddress, abi, signer);
    await contract.toggle();
    const state = await contract.isOn();
    setIsOn(state);
  };

  const handleClick2 = async () => {
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new Contract(contractAddress, abi, signer);
    await contract.toggle2();
    const state2 = await contract.isUser();
    setIsUser(state2);
  };

  return (
    <div>
      <button onClick={handleClick} className="tog">
        Toggle window
      </button>
      <p>{`Window's State: ${isOn}`}</p>
      <button onClick={handleClick2} className="tog">
        Toggle UserControl
      </button>
      <p>{`User Control: ${isUser}`}</p>
    </div>
  );
};

export default ContractToggle;
