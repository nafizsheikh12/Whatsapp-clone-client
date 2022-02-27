import React from 'react'
import { useContext } from 'react';
import { Dialog, makeStyles, withStyles,Box } from '@material-ui/core'

import { UserContext } from './context/UserProvider';

//component 
import Menu from './menu/Menu'
import Chat from './chat/Chat'
import EmptyChat from './chat/EmptyChat'

const useStyles = makeStyles({
    component: {
        display: 'flex'
  },
  leftcomponent: {
      minWidth: 370
  },
  rightcomponent: {
      borderLeft: `1px solid rgba(0,0,0,14)`,
      minWidth: 870
  }
})

const style = {
    DialogPaper: {
        height: '95%',
        width: '91%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
        
    }
}

const ChatBox = ({classes}) => {
    const classname = useStyles();
    const { person } = useContext(UserContext);

    return (
      <Dialog
       open= {true}
       classes={{paper: classes.DialogPaper}}
      >
        <Box className={classname.component}>
            <Box className={classname.leftcomponent}>
                    <Menu/>
            </Box>
            <Box className={classname.rightcomponent}>
               {
                        Object.keys(person).length  ? <Chat/> : <EmptyChat />
                    }
           </Box>
        </Box>
      </Dialog>
    )
}

export default withStyles(style)(ChatBox)
