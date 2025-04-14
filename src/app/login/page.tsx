'use client'
import { useState } from 'react';
import login_data from '../../_sample_data/login.json';

interface loginProps {
    emailId: string;
    password: string;
}

export default function LoginComp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function login() {
        let index = login_data.findIndex(x => x.emailId === email);
        console.log(index)
        let x = 'Login Failed';
        if (index >= 0) {
            console.log(password, email)
            x = login_data[index].password === password ? 'Login Successful' : 'Login Failed';
        }
        console.log(x);
    }

    return (
        <>
            <input type="text" placeholder="Enter Email Id" onChange={(e) => {setEmail(e.currentTarget.value)}} value={email}/> 
            <input type="text" placeholder="Enter Password" onChange={(e) => {setPassword(e.currentTarget.value)}} value={password}/>
            <button type="button" onClick={() => login()} >LOGIN</button>
        </>
    )
}
