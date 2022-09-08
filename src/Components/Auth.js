import React from 'react';
import LoginForm from "./LoginForm";
import Home from "./Home";
import { useUserContext } from '../Context/userContext';

const Auth = () => {

    const {user} = useUserContext();
    console.log(user)
  return (
    <>
        {user.isGuestUser ? <LoginForm /> : <Home/>}
    </>
  )
}


export default Auth