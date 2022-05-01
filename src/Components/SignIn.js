import React from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useHistory } from "react-router-dom";

const SignIn = () =>  {
    const history = useHistory();
    let username = '';
    let password = '';

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            console.log('history: ', history);
            history.push("/");
        } catch (error) {
            console.log('error signing in', error);
        }
    }     

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        username = formData.get('username'); console.log('username: ', username);
        password = formData.get('password'); console.log('password: ', password);
        signIn();   
      };

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

        {/* <Authenticator>
        <div>
            SignIn Success!
        </div>
        </Authenticator> */}


    </div>
    )
  
}

export default SignIn;


