import React, { Component } from "react";
import {View} from'react-native';
import { FuschiaTheme, BlueTheme } from './theme'

const Context = React.createContext();

export class AppContextProvider extends Component {
    state = {
        theme: FuschiaTheme,
        updateTheme: (theme) => {
            console.log("UPDATING  THEME", theme)
            this.setState({ theme: theme })
        }
    }
    
    render() {
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