import { useState } from 'react';
import './App.scss';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) =>{
        return [...prevUserList, {
          name:uName,
          age:uAge,
          id:Math.random().toString()
        }];
    });
  }
  return (
    <div className='parent'>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
