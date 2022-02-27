import {useEffect,useState,useContext} from 'react'
import { getUsers } from '../service/api'
import {Box,makeStyles} from '@material-ui/core'

import { AccountContext } from '../context/AccountProvider'

//componenent

import Conversation from './Conversation'


const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '81vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }
})



const Conversations = ({text}) => {
    const classes = useStyles();
    const [users,setUsers] = useState([]);
    const {account, socket, setActiveUsers} = useContext(AccountContext)

   useEffect(() => {
       const fetchData = async () => {
           const data = await getUsers();
           const filterData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(filterData)
       }

       fetchData()
   },[text])

   useEffect(() => {
    socket.current.emit('addUser', account.googleId);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
    }, [account])

    return (
        <Box className={classes.component}>
          {
              users.map(user => (
                  user.googleId !==  account.googleId &&
                  <Conversation user={user}/>
                 
              ))
          }
        </Box>
    )
}

export default Conversations
