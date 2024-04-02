"use client";
import Button from "@/app/ui/common/button";
import Web3 from "web3";

export default function Navbar() {
  let web3: Web3;
  const handleClickConnect = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        web3 = new Web3(window.ethereum);
      } catch (error) {
        console.error(error);
      }
    } else {
      throw Error("please install MetaMask");
    }
  };
  return (
    <div className="flex justify-between items-center w-full px-10 py-6">
      <h1 className="font-montserrat text-3xl">Vending Machine</h1>
      <Button label="Connect" onClick={handleClickConnect}></Button>
    </div>
  );
}
