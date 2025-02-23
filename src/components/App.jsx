import { useState } from 'react'
import './App.css'
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from './Profile/Profile.jsx'
import FriendList from './FriendList/FriendList.jsx'
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx'

function App() {
  return (
    <>
      <div className="user-info">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
