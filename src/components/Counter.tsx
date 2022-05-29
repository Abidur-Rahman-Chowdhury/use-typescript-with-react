import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name: string,
    job: string,
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const [user,setUser] = useState<User | null>(null)
    const handelIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handelUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Adam',
            job: 'Developer',
        }
    } 

    const handelNameChange = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }
    return (
        <div>
               <h1>This is counter</h1>
            <h2>{ counter}</h2>
            <button onClick={handelIncrease}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;