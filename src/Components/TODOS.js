import React, { Component, useEffect, useState } from 'react'
import { Hub } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { setUserSession, removeUserSession } from '../Common/common.js'

const initialState = { name: '', description: '' }


function TODOS () {
    const history = useHistory();
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState([]);
    const styles = {
      container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
      todo: {  marginBottom: 15 },
      input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
      todoName: { fontSize: 20, fontWeight: 'bold' },
      todoDescription: { marginBottom: 0 },
      button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
    }

    const listener = (data) => {
      switch (data.payload.event) {
          case 'signIn':
              console.log('user signed in');
              let username = data.payload.data.username;
              setUserSession(username);
              window.location.replace("/profile");
              break;
          case 'signUp':
              console.log('user signed up');
              break;
          case 'signOut':
              console.log('user signed out');
              removeUserSession();
              break;
          case 'signIn_failure':
              console.log('user sign in failed');
              break;
          case 'tokenRefresh':
              console.log('token refresh succeeded');
              break;
          case 'tokenRefresh_failure':
              console.log('token refresh failed');
              break;
          case 'configured':
              console.log('the Auth module is configured');
      }
  }
  
  Hub.listen('auth', listener);

    useEffect(() => {

    }, [])
    
    return (
    
     <Authenticator>
      {({ signOut, user }) => (
        <div style={styles.container}>
          <h1>Hello {user.username}</h1>
          {console.log(user)}
          <button style={styles.button} onClick={ signOut }>Sign out</button>
     
        </div>
      )}
    </Authenticator>

    )

}

export default TODOS;
