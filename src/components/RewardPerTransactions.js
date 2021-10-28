import React, { useState } from "react";
import "../App.css";
import data from "../data";

function RewardPerTransactions({ contacts, rewardByTransaction }) {
  return (
    <div className="app-container">
      <h1>Reward Per Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Transaction Data</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.amt}</td>
              <td>{contact.transactionDt}</td>
              <td>{rewardByTransaction(contact.amt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardPerTransactions;
