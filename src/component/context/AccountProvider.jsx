import {createContext,useState,useRef,useEffect} from 'react'
import {io} from "socket.io-client"
export const AccountContext =  createContext(null);




const AccountProvider = ({children}) => {
 
    const [account,setaccount] = useState();
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const [activeUsers, setActiveUsers] = useState([]);
    
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const socket = useRef();
    useEffect(() => {
      socket.current = io('ws://localhost:9000');
  }, [])

    return (
       <AccountContext.Provider
           value={{
            account, 
            setaccount, 
            showloginButton,
            setShowloginButton,
            showlogoutButton,
            setShowlogoutButton,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
           }}
        >
        {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
