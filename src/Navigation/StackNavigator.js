import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import BottomNavigator from './BottomNavigator'
import Login from '../Pages/Login'
import Notification from '../Pages/Notification'
import AllCategory from '../Pages/AllCategory'
import { Camera } from 'react-native-vision-camera'
import PermissionsPage from '../Pages/PermissionsPage'
import CameraPage from '../Pages/CameraPage'

const StackNavigator =()=>  {

  // const cameraPermission = Camera.getCameraPermissionStatus()
  // const microphonePermission = Camera.getMicrophonePermissionStatus()


  // console.log(`Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`)

  // const showPermissionsPage = cameraPermission !== 'granted' || microphonePermission === 'not-determined'

    const Stack=createNativeStackNavigator()
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
            statusBarStyle: 'light',
            animationTypeForReplace: 'push',
          }} initialRouteName={'Login'}>
            {/* <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
            <Stack.Screen name="CameraPage" component={CameraPage} /> */}
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='Main' component={BottomNavigator} options={{headerShown:false}}/>
            <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
            <Stack.Screen name='AllCategory' component={AllCategory} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator
