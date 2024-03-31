import type { Metadata } from "next";
import Navbar from "../ui/vending-machine/navbar";
export const metadata: Metadata = {
  title: "Vending Machine",
  description: "a blockchain Vending Machine Dapp",
};
export default function Page() {
  return (
    <div className="container">
        <Navbar appName="Vending Machine"></Navbar>
    </div>
  )
}
