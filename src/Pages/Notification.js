import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../myassets/Theme';

const Notification = ({ navigation }) => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  return (
    <ImageBackground source={{ uri: Theme.img }} blurRadius={Theme.blur} style={{ flex: 1 }}>


      <View style={{
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        height: 50
      }}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Theme.mydarko, borderRadius: 200, width: 40, height: 40 }} onPress={() => {
          navigation.goBack();
        }}>
          <Ionicons name='chevron-back-sharp' size={22} color={Theme.mydark} />
        </TouchableOpacity>
        <Text style={{ color: Theme.mydark, fontSize: 22, fontWeight: '600', textAlign: 'center', flex: 1 }}>Notifications</Text>
      </View>


      <View style={{ padding: 10 }}>
        <View style={{ backgroundColor: Theme.mydarko, width: '100%', height: 45, padding: 10, borderRadius: 20, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Ionicons name='search' size={22} color={Theme.mydark} />
          <TextInput placeholderTextColor='gray' placeholder='Search here...' style={{ width: '85%', height: 40, color: Theme.mydark }} />
        </View>
      </View>

      <ScrollView style={{ width: '100%', height: '100%' }}>


        {arr.map(i => {
          return (<>

            <TouchableOpacity style={{ flexDirection: 'row', gap: 20, padding: 10, borderBottomColor: Theme.mydarko, borderBottomWidth: 1,backgroundColor:i===1 || i===3 || i===5 || i===8 || i===9?null:Theme.mydarko }}>
              <View>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190613.png' }} style={{ width: 50, height: 50, borderRadius: 200, objectFit: 'contain' }} />
              </View>

              <View style={{ width: '80%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: Theme.mydark, fontSize: 17, fontWeight: '600' }}>User Hire</Text>
                  <Text style={{ color: Theme.mydarkt, fontSize: 13, fontWeight: '400', }}>12:47 AM</Text>
                </View>
                <Text style={{ color: Theme.mydarkt, fontSize: 13, fontWeight: '400', }}>Find & Download Free Graphic Resources for User. 361000+ Vectors, Stock Photos.</Text>

              </View>

            </TouchableOpacity>

          </>)
        })}


      </ScrollView>





    </ImageBackground>
  );
};

export default Notification;
