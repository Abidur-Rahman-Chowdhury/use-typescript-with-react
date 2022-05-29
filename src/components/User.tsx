import React, { FC } from 'react';

interface Props {
    age: number,
    name: string,
    addUser: ()=> void
}

const User: FC<Props> = ({name,age,addUser}) => {
    
    return (
        <div>
            <h2>Hello From : { name}</h2>
            <h2>His age : {age}</h2>
            <button onClick={addUser}>Add me</button>
        </div>
    );
};

export default User;