import React,{useContext,useState,useEffect} from 'react'
import { Box, Typography,makeStyles } from '@material-ui/core'

import { AccountContext } from '../context/AccountProvider'
import { UserContext } from '../context/UserProvider'
//api
import { setConversation } from '../service/api'
import { GetConversation } from '../service/api'


const useStyles = makeStyles({
    component: {
        height: 40,
        display: 'flex',
        padding: '13px 0',
        cursor: 'pointer'
    },
    displayPicture: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 14px'
    },
    container: {
        display: 'flex'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#00000099',
        marginRight: 20
    },
    text: {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    }
})


const Conversation = ({user}) => {
    const classes = useStyles()
    const url = user.imageUrl
   
     const {account,newMessageFlag} = useContext(AccountContext)
     const { setperson } = useContext(UserContext);

     const [message,setmessage] = useState({})
    const setUser = () => {
        setperson(user)
        setConversation({senderId: account.googleId, receiverId: user.googleId})
    }

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await GetConversation({sender: account.googleId,receiver: user.googleId})
            setmessage({text: data.message,timestamp:data.updatedAt})
        }

        getConversationMessage()
    },[newMessageFlag])
    return (
        <Box className={classes.component} onClick={() => setUser()}>
            <Box>
                   <img src={url} className={classes.displayPicture}/>
            </Box>
            <Box>
               <Box>
                   <Typography>
                       {user.name}
                   </Typography>
                   {
                       message.text &&
                       <Typography style={{paddingTop:"5px"}}>
                           {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes}
                       </Typography>
                   }
               </Box>
            </Box>
        </Box>
    )
}

export default Conversation
