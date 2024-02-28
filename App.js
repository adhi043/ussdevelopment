
import React from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import { StatusBar, Text } from 'react-native';
import Theme from './src/myassets/Theme';


function App() {
  
  return (
    <>
    <StatusBar
        barStyle={'light-content'}
        backgroundColor={Theme.main}
      />
    <StackNavigator/>
    </>
  );
}



export default App;
