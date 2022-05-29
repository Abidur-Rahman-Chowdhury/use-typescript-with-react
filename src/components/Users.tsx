import React, { useState } from 'react';
import User from './User';

const Users = () => {
    const addUser = (): void => {
        
    }
    
    return (
        <div>
            <h2> My Users</h2>
            <User name='Rahamot' age={55} addUser={addUser}></User>
        </div>
    );
};

export default Users;