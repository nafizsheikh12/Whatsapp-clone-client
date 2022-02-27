import React,{useState,useContext} from 'react'
import {MoreVert} from '@material-ui/icons'
import {Menu,MenuItem,Button,makeStyles} from '@material-ui/core'

import {GoogleLogout} from 'react-google-login'

import { AccountContext } from '../context/AccountProvider'
import  Drawer  from '../drawer/infoDrawer'
const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border:'none!important', 
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})

const HeaderMenu = () => {
    const [open,setopen] = useState(false)
    const {account,setaccount} = useContext(AccountContext)
    const [opendraw,setopendraw] = useState(false)
    const handleClick = (event) => {
        setopen(event.currentTarget);
      };
    
      const handleClose = () => {
       setopen(false)
      };

      const onSignoutSuccess = () => {
          alert('You have been loggen out successful')
          setaccount('')
          console.log(account)
          console.clear()
      }

      const onLoginFailure = () => {
           console.log('eror')
      }

      const classes = useStyle();
    return ( <>
             <MoreVert onClick={handleClick}/>
             
             <Menu
               id="simple-menu"
              
               keepMounted
               open={Boolean(open)}
               onClose={handleClose}
               getContentAnchorEl={null}
               anchorOrigin={{
                   vertical: 'botton',
                   horizontal: 'left',
               }}
             >
               <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
               <MenuItem className={classes.menuItem} onClick={handleClose}>My account</MenuItem>
               <MenuItem className={classes.menuItem} onClick={() => {handleClose(); }}>
                   <GoogleLogout
                       clientId="773012825875-9p6hj2grs5764d5evl6p0kvq7fos1vjp.apps.googleusercontent.com"
                          buttonText="Logout"
                          onLogoutSuccess={onSignoutSuccess}
                          onFailure={onLoginFailure}
                          cookiePolicy={'single_host_origin'}
                   >

                   </GoogleLogout>
               </MenuItem>
            </Menu>
            <Drawer open={opendraw} setOpen={setopendraw} />
       </>
    )
}

export default HeaderMenu
