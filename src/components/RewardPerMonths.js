import React, { useState } from 'react'
import data from '../data';

function RewardPerMonths({contacts, rewardByTransaction}) {
    const [totalReward ,setTotalReward] = useState(0);
    const Month = (num) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = new Date(num).getMonth();
        return months[month];
    }

    const rewardByMonths = () => {
      var result = 0;
      setTotalReward(result += rewardByTransaction(contacts.amt))
    }
    return (
        <div className="app-container">
        <h1>Reward Per Month</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Month</th>
                <th>Total Reward</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                 <tr>
                 <td>{contact.name ? contact.name : null}</td>
                 <td>{Month(contact.transactionDt)}</td>
                 <td>{rewardByTransaction(contact.amt)}</td>
               </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
}

export default RewardPerMonths;
