import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../myassets/Theme';
import SwiperFlatList from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';

const Home = ({ navigation }) => {

  var width = Dimensions.get('window').width;

  const [query, setQuery] = useState('')

  const slider = [
    {
      image: require('../myassets/adnan.jpeg'),
      text: 'Director'
    },
    {
      image: require('../myassets/adnan.jpeg'),
      text: 'Founder'
    },
    {
      image: require('../myassets/adnan.jpeg'),
      text: 'C.E.O.'
    },


  ]

  const data = [
    {
      name: 'Digital Marketing',
      image:'https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/11/DM_blog_post_image_03.jpg'
    },
    {
      name: 'Web Development',
      image:'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg'
    },
    {
      name: 'React Js Development',
      image:'https://www.trickyenough.com/wp-content/uploads/2022/01/unnamed-4.png'
    },
    {
      name: 'Backend Development',
      image:'https://media.excellentwebworld.com/wp-content/uploads/2023/04/13073124/Backend-Development.jpg'
    },
    {
      name: 'MERN Stack Development',
      image:'https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1'
    },
    {
      name: 'Mobile App Development',
      image:'https://techmag.com.pk/wp-content/uploads/2023/05/The-Future-of-Pakistans-Mobile-App-Development-in-2023.png'
    },



  ]






  return (

    <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>




      <View style={{ backgroundColor: Theme.main, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Theme.mylight, borderRadius: 200, width: 65, height: 65, position: 'absolute', right: 10, top: 10, elevation: 5 }} onPress={() => {
          // navigation.navigate('Notification')
        }}>
          <Image source={require('../myassets/logo.png')} style={{ width: 45, height: 45, borderRadius: 0 }} resizeMode='contain' />
        </TouchableOpacity>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 32, color: Theme.mylight, fontWeight: 'bold', width: '80%' }}>Get Our Digital Services</Text>
        </View>


        <View style={{ padding: 10 }}>
          <View style={{ backgroundColor: Theme.mylight, width: '100%', height: 45, padding: 10, borderRadius: 10, flexDirection: 'row', gap: 10, alignItems: 'center', elevation: 5, borderWidth: 1, borderColor: Theme.main }}>
            <Ionicons name='search' size={22} color={Theme.main} />
            <TextInput placeholderTextColor='gray' placeholder='Search here...' style={{ width: '85%', height: 40, color: Theme.mydark }} onChangeText={value => setQuery(value)} />
          </View>
        </View>

      </View>

      <View style={{ padding: 10 }}>
        <View style={{ backgroundColor: Theme.mydarko, width: width - 23, height: 170, borderRadius: 10, elevation: 5, }}>
          <Image source={require('../myassets/banner.jpeg')} style={{ width: width - 23, height: 170, objectFit: 'fill', borderRadius: 10, }} />

        </View>
      </View>





      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <View>
            <Text style={{ fontSize: 18, color: Theme.mydark, fontWeight: 'bold' }}>Owners</Text>
          </View>
          {/* <TouchableOpacity style={{ padding: 5 }}>
            <Text style={{ fontSize: 14, color: Theme.mydark, }}>View All</Text>
          </TouchableOpacity> */}


        </View>

        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>


          {slider?.map(i => {
            return (<>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{  padding: 5, height: 78, borderRadius: 200, width: 78, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: Theme.main }}>
              <TouchableOpacity style={{  backgroundColor: Theme.mylight, padding: 5, height: 70, borderRadius: 200, width: 70, justifyContent: 'center', alignItems: 'center',  borderWidth: 0, borderColor: Theme.main }}>
              <Image source={i?.image} style={{ width: 70, height: 70, borderRadius: 200 }} resizeMode='cover' />
              </TouchableOpacity>
              </TouchableOpacity>
                <Text style={{ color: Theme.primary, textAlign: 'center' }}>{i?.text}</Text>
              </View>
            </>)
          })}

        </View>
      </View>


      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
          <View>
            <Text style={{ fontSize: 18, color: Theme.mydark, fontWeight: 'bold' }}>Category</Text>
          </View>
          <TouchableOpacity style={{ padding: 5 }} onPress={()=>{navigation.navigate('AllCategory')}}>
            <Text style={{ fontSize: 14, color: Theme.mydark, }}>View All</Text>
          </TouchableOpacity>


        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{  }}>


          {data?.filter(i => {
            if (query === '') {
              return i
            }
            else if (i?.name.toLowerCase().includes(query.toLocaleLowerCase())) {
              return i
            }


          })?.map(i => {
            return (<>
              <TouchableOpacity style={{ elevation: 10, backgroundColor: Theme.mylight,  height: 190, borderRadius: 10, width: 200, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: 0, borderColor: Theme.main,margin:5 }}>
              <Image source={{uri:i?.image}} style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: 10, }} />
              </TouchableOpacity>
            </>)
          })}

        </ScrollView>
      </View>



    </ScrollView>

    
  );
};

export default Home;
