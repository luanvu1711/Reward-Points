import React, { useState } from "react";
import "./App.css";
import data from "./data";
import RewardPerTransactions from "./components/RewardPerTransactions";
import RewardPerMonths from "./components/RewardPerMonths";
import RewardPerClient from "./components/RewardPerClient";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [reward, setReward] = useState(0);
  const rewardByTransaction = (num) => {
    var result = 0;
    if ((num - 100) > 0) {
      result += (num - 100) * 2;
    }
    if (num >  50) {
      var over50 = Math.floor(num/50) - 1;
      result += over50 * 50;
    }
    return result;
  }

  return (
    <div>
      <RewardPerTransactions contacts={contacts} rewardByTransaction={rewardByTransaction}/>
      <RewardPerMonths contacts={contacts} rewardByTransaction={rewardByTransaction}/>
      <RewardPerClient contacts={contacts}/>
    </div>
  )
};

export default App;