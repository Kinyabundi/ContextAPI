import React from 'react'
import { useUserContext } from '../Context/userContext';


const Home = () => {
  const { user, logOut } = useUserContext();
  
  return (
    <div className=" ui container center">
        <div className="home-profile">
            <div className=" ui message success">
                <h3>{user.name} , Welcome to PopCornflix</h3>
                {!user.isGuestUser && (<button className='ui button blue' onClick={logOut} >Logout</button>) }
            </div>
        </div>
    </div>
  )
}

export default Home