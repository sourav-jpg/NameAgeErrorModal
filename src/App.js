import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler =(uName,uAge)=>{
     setUserList((prevState)=>{
      return [...prevState,{name:uName,age:uAge,id:Math.random().toString()}]
     })
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
