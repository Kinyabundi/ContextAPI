import React from 'react';
import { useUserContext } from '../Context/userContext';

const Header = () => {
  const {user, logOut} = useUserContext();
  console.log(user);
  
  return (
    <div>
        <div className=" ui fixed menu">
            <div className="ui container center">
                <h2>PopCornflix</h2>
                <div className="profile">
                    <h3>Welcome, {user.name}</h3>
                {!user.isGuestUser && (<button className='ui button blue' onClick={logOut} >Logout</button>) }
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Header;