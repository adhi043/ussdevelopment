import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Pages/Home'
import Theme from '../myassets/Theme'
import Profile from '../Pages/Profile';
import { Text } from 'react-native';
import Personality from '../Pages/Personality';

const BottomNavigator =()=> {

    const Tab= createBottomTabNavigator()

    return (
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:Theme.main,
            // position:'absolute',
            bottom:0,
            left:0,
            right:0,
            shadowOpacity:4,
            shadowRadius:4,
            elevation:0,
            shadowOffset:{
                width:0,
                height:-4,
            },
            borderTopWidth:0,
            marginHorizontal:0,
            padding:0,
            borderRadius:0,

        }
      }}>
        <Tab.Screen name='Home' component={Home} 
        options={{
            tabBarLabel:'Home',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mylight},
            tabBarIcon:({focused})=>focused?(
                <Ionicons name='home-sharp' size={25} color={Theme.mylight} />
            ):(
                <Ionicons name='home-outline' size={25} color={Theme.mylight} />
            )
            }}/>
        {/* <Tab.Screen name='Stars' component={Personality} 
        options={{
            tabBarLabel:'Stars',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mydark},
            tabBarIcon:({focused})=>focused?(
                <AntDesign name='star' size={25} color={Theme.mydark} />
            ):(
                <AntDesign name='staro' size={25} color={Theme.mydark} />
            )
            }}/> */}
        <Tab.Screen name='Projects' component={Profile} 
        options={{
            tabBarLabel:'Projects',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mylight},
            tabBarIcon:({focused})=>focused?(
                <FontAwesome name='user' size={25} color={Theme.mylight} />
            ):(
                <FontAwesome name='user-o' size={25} color={Theme.mylight} />
            )
            }}/>
        <Tab.Screen name='Courses' component={Profile} 
        options={{
            tabBarLabel:'Courses',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mylight},
            tabBarIcon:({focused})=>focused?(
                <FontAwesome name='user' size={25} color={Theme.mylight} />
            ):(
                <FontAwesome name='user-o' size={25} color={Theme.mylight} />
            )
            }}/>
        <Tab.Screen name='Packages' component={Profile} 
        options={{
            tabBarLabel:'Packages',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mylight},
            tabBarIcon:({focused})=>focused?(
                <FontAwesome name='user' size={25} color={Theme.mylight} />
            ):(
                <FontAwesome name='user-o' size={25} color={Theme.mylight} />
            )
            }}/>
        {/* <Tab.Screen name='Profile' component={Profile} 
        options={{
            tabBarLabel:'Profile',
            headerShown:false,
            tabBarLabelStyle:{color:Theme.mylight},
            tabBarIcon:({focused})=>focused?(
                <FontAwesome name='user' size={25} color={Theme.mylight} />
            ):(
                <FontAwesome name='user-o' size={25} color={Theme.mylight} />
            )
            }}/> */}
      </Tab.Navigator>
    )
}

export default BottomNavigator
