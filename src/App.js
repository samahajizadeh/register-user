import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import UserList from './components/UserList';
import useHttp from "./hook/use-http";
const App = () => {
  const [userItem,setUserItem] = useState('');

  const {isError,isLoading,sendRequest} = useHttp();
  useEffect(()=>{
    const getData = (user) =>{
        const userArray = [];
       for(const key in user){
         userArray.push({id:key,...user[key]})
       }
       setUserItem(userArray)
    }
    sendRequest({ url:'https://react-movies-d52dd-default-rtdb.firebaseio.com/register.json'},getData)
  },[])

  const userRegister = (data) => {
    setUserItem(prevItem =>prevItem.concat(data))
  }

  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-center">
        <Register onAddUser={userRegister}/>
        <div className="w-100"></div>
        <UserList users={userItem} isLoading={isLoading} isError={isError}/>
      </div>
    </div>
  );
};
export default App;
