import React, { Component } from "react";
import {View} from'react-native';
import { FuschiaTheme, BlueTheme } from './theme'
import { saveLocalData,readLocalData } from './storageutil'


const Context = React.createContext();

export class AppContextProvider extends Component {
  
    state = {
        theme: FuschiaTheme,
        updateTheme: (theme) => {
            console.log("UPDATING  THEME", theme)
            this.setState({ theme: theme })
            let themedata  = (theme==FuschiaTheme)?"fuschia":"blue";
            saveLocalData("themeVal",themedata);
        }
    }
    
    render() {
      let istheme = readLocalData("themeVal");
      console.log(istheme);
      if(istheme){
        let  gotTheme = (istheme =="fuschia")?FuschiaTheme:BlueTheme;
        // this.state.updateTheme(gotTheme);
      } 
      console.log("props",this.props.children)
        const { theme } = this.state
        return (
            <Context.Provider value={ this.state }>
               
                    {this.props.children }
                
            </Context.Provider>
        )
    }
}

export function withTheme(WrapperComponent){
    return (
        (props) => {
          return (
            <Context.Consumer>
              {
                (holder) => {
                   console.log("HOLDER",holder)
                  return (
                    <WrapperComponent 
                    theme={holder.theme}
                    {...props}
                    />
                     
                  );
                }
              }
            </Context.Consumer>
          );
        }
      );

}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;