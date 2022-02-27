import React,{useContext,useState,useEffect} from 'react'
import {Dialog,withStyles,Box,makeStyles, Typography,List, ListItem} from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';

import {addUser} from '../service/api'

const useStyles = makeStyles({
  component: {
        display: 'flex'
  },
  leftComponent: {
     padding:'56px 0 0 56px'
  },
  dialog: {
    padding: '56px 0 56px 56px',
},
qrcode: {
    margin: '22px 39px',
    height: 264,
    width: 264
},
list: {
    '&  > *': {
        padding: 0,
        marginTop: 15,
        fontSize: 18,
        lineHeight: '28px',
        color: '#4a4a4a'
    }
},
title: {
    fontSize: 26,
    marginBottom: 25,
    color: '#525252',
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
    fontWeight: 300   
},
DialogPaper: {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
    
},

})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};


const Login = ({classes}) => {
    const classname = useStyles();
    const [open, setOpen] = useState(false);
    const {account,setaccount} = useContext(AccountContext)

    const onLoginSuccess = (res) => {
        console.log(res)
        setaccount(res.profileObj);
        addUser(res.profileObj);
		alert("login success")
      //
    }

    const onLoginFailure = () => {
        console.log('failer')
		alert("login failed fuck")
    }

    useEffect(() => {
        setOpen(true);
    }, [])

    const handleClose = () => {
        setOpen(false)
    }
    return (
       <Dialog open={true}
           classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
          
       >
               <Box className={classname.component}>
                   <Box className={classname.dialog}>
                       <Typography className={classname.title}>To use Whatsapp on your computer</Typography>
                       <List  className={classname.list}>
                           <ListItem>
                               1.Open Whatsapp on your phone
                           </ListItem>
                           <ListItem>
                               2.Tap menu or Setting and selet link device
                           </ListItem>
                           <ListItem>
                               3.POint your phone to this screen to capture the oce
                           </ListItem>
                       </List>
                   </Box>
                   <Box  style={{position:'relative'}}>
                       <img className={classname.qrcode} src="https://upload.wikimedia.org/wikipedia/commons/4/43/WhatsApp_click-to-chat_QR_code.png"/>
                     <Box style={{position: 'absolute', left: '34%', top: '50%', transform: 'translateX(0%) translateY(-25%)'}}>
                       <GoogleLogin
                          clientId="773012825875-9p6hj2grs5764d5evl6p0kvq7fos1vjp.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={onLoginSuccess}
                          onFailure={onLoginFailure}
                          cookiePolicy={'single_host_origin'}
                        />
                     </Box>   
                   </Box>
               </Box>
       </Dialog>
    )
}

export default withStyles(style)(Login);