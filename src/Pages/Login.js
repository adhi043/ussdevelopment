import React from 'react'
import { Image, ImageBackground, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Theme from '../myassets/Theme'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const Login = ({navigation}) => {

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccessToken
        const data = await AccessToken.getCurrentAccessToken();
      
        console.log(data,'=>data');
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
      }

    return (
        // <ImageBackground source={Theme.img} blurRadius={Theme.blur} style={{ flex: 1 }}>
            <SafeAreaView> 
                
                <View style={{ width: '100%', height: '100%',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingHorizontal:20 }}>
                    <View style={{backgroundColor:Theme.mylight,width:160,height:160,borderRadius:200,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../myassets/logo.png')} style={{width:150,height:150,borderRadius:0}} resizeMode='contain'/>
                    </View>
                    <Text style={{ color: Theme.mydark, fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 40,fontFamily:'roboto' }}>Welcome to USS Development!</Text>


                    <View style={{ height: 80 }} />

                    {/* <Pressable style={{
                        backgroundColor: Theme.primaryg,
                        padding: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 300,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                    }}>
                        <Text style={{ color: Theme.ydark }}>Sign in with spotify</Text>
                    </Pressable> */}

                    <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{
                        backgroundColor: Theme.main,
                        padding: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        borderColor: Theme.main,
                        borderWidth: 0,
                        height:50,
                        elevation:5
                    }}>
                        {/* <FontAwesome name='user' size={24} color={Theme.mylight} /> */}
                        <Text style={{ color: Theme.mylight, fontWeight: '500', textAlign: 'center', flex: 1,fontSize:18 }}>Get Started</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={{
                        backgroundColor: Theme.mydarkb,
                        padding: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        borderColor: Theme.mydark,
                        borderWidth: 0,
                        height:50
                    }}>
                        <AntDesign name='google' size={24} color={Theme.mydark} />
                        <Text style={{ color: Theme.mydark, fontWeight: '500', textAlign: 'center', flex: 1 }}>Sign in with Google</Text>
                    </TouchableOpacity> */}

                    {/* <Pressable onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))} style={{
                        backgroundColor: Theme.primary,
                        padding: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 300,
                        borderRadius: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        borderColor: Theme.ylight,
                        borderWidth: 1
                    }}>
                        <Entypo name='facebook' size={24} color={Theme.primaryb} />
                        <Text style={{ color: Theme.ylight, fontWeight: '500', textAlign: 'center', flex: 1 }}>Sign in with Facebook</Text>
                    </Pressable> */}

                </View>
            </SafeAreaView>
            // </ImageBackground>
    )
}

export default Login
