import React from 'react'

function RewardPerClient({ contacts }) {
    // var uniqueClient = [];
    // var clients = [];
    // var UniqueClient = (contacts) => {
    //     contacts.map(contact => {
    //         clients.push(contact.name);
    //     });
    //     uniqueClient = [...new Set (clients)];
    //     return uniqueClient; 
    // } 

    return (
        <div className="app-container">
        <h1>Reward Per Transactions</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Reward</th>
              </tr>
            </thead>
            <tbody>
              {/* {contacts.map((contact) => (
                 <tr>
                 {UniqueClient(contacts).map(client => {
                        return (
                        <td>{client}</td>
                        )
                 })}
                 <td>{contact.transactionDt}</td>
                 <td>{rewardByTransaction(contact.amt)}</td>
               </tr>
              ))} */}
            </tbody>
          </table>
      </div>
    )
}

export default RewardPerClient
