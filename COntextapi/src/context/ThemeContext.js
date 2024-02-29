import React, { createContext, useContext } from "react";
const ThemeContext = createContext({
    themeMode:'Light',
    darkMode:  ()=>{},
    lightMode: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider();
export default useTheme= ()=>
{
    return useContext(ThemeContext)
}
