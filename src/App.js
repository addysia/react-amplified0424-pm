/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
import TODOS from "./Components/TODOS";
import Header from "./Components/Header";

Amplify.configure(awsExports);


const App = () => {

  return (
    <div>
    <Header/>
    </div>
  );

}

export default App