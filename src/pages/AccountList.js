import React from "react";
import ListView from "../components/ListView";
import { Creators as AccountActions } from "../store/account";
import { iconForAccountType } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import FAB from "../components/FAB";

const accountsLoad = [
  { id: 1, name: "Wallet", type: "wallet", initialBalance: 140 },
  { id: 2, name: "Banco 2", type: "bank", initialBalance: 140 },
  { id: 3, name: "Banco 3", type: "savings", initialBalance: 140 },
  { id: 4, name: "Banco 4", type: "card", initialBalance: 140 }
];
export default function AccountList() {
  const dispatch = useDispatch();
  const { data: accounts, loading, error } = useSelector(
    state => state.account
  );

  React.useEffect(() => {
    console.log("UseEffect", { accountsLoad, dispatch });
    dispatch(AccountActions.AccountLoadSuccess(accountsLoad));
  }, [dispatch]);

  return (
    <>
      <ListView
        items={accounts.map(x => ({
          ...x,
          title: x.name,
          secondary: "Balance: R$" + x.initialBalance,
          icon: <i className={"fas " + iconForAccountType[x.type]}></i>
        }))}
      />
      <FAB />
    </>
  );
}
