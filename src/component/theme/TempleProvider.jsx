import React,{createContext} from 'react'

import { ThemeProvider, createTheme } from '@material-ui/core/styles'

const TemplateContext = createContext(null);

const TempleProvider = ({ children }) => {
    const theme = createTheme({
        overrides: {
            MuiDrawer: {
               paperAnchorLeft: {
                   top:55,
                    left: "63px",
                    top: "10px",
                    right: "auto",
                    width: "34%",
                    height: "95%"
                } 
            }
        }
    })
    return (
       <TemplateContext.Provider>
          <ThemeProvider theme={theme}>
             {children}
          </ThemeProvider>
       </TemplateContext.Provider>
    )
}

export default TempleProvider
