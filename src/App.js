import logo from './logo.svg';
import './App.css';

//components
import Messenger from './component/Messenger';
import AccountProvider from './component/context/AccountProvider';

import UserProvider from './component/context/UserProvider';

function App() {
  return (

    <UserProvider>
    <AccountProvider>
        <Messenger />
    </AccountProvider>
    </UserProvider>
   
   
    
  );
}

export default App;
