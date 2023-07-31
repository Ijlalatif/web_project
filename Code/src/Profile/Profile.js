import React from 'react';
import styles from './Profile.module.css';

import logo from './userprofile.jpg';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = {
    name: 'Muhammad ijlal atif',
    DOB:'29-11-2002',
    email: 'xyz123@gmail.com',
    profilepic : logo,
    role: 'Bowler',
  };

  const navigate = useNavigate();

  return (
    <div className={styles.body}>
        <div className={styles.Container}>

        <div className={styles.profile}>
        <img src={user.profilepic} alt='' width="170px" style={{borderRadius:"50%"}}/>
            <h3>Name : <label>{user.name}</label></h3>

            <h3>DOB : <label>{user.DOB}</label></h3>
            
            <h3>Email : <label>{user.email}</label></h3>
            
            <h3> Role: <label>{user.role}</label></h3>

            <button onClick={()=>navigate('/')}>Back to Home page</button>
        </div>
        
        </div>
    </div>
  );
};

export default UserProfile;
