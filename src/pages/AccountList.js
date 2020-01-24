import React from "react";
import ListView from "../components/ListView";
import { iconForAccountType } from "../constants";
export default function AccountList() {
  const accounts = [
    { id: 1, name: "Wallet", type: "wallet", initialBalance: 140 },
    { id: 2, name: "Banco 2", type: "bank", initialBalance: 140 },
    { id: 3, name: "Banco 3", type: "savings", initialBalance: 140 },
    { id: 4, name: "Banco 4", type: "card", initialBalance: 140 }
  ];

  return (
    <ListView
      items={accounts.map(x => ({
        ...x,
        title: x.name,
        secondary: "Balance: R$" + x.initialBalance,
        icon: <i className={"fas " + iconForAccountType[x.type]}></i>
      }))}
    />
  );
}
