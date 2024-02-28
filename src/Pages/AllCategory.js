import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../myassets/Theme';
import SwiperFlatList from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';

const AllCategory = ({ navigation }) => {

  var width = Dimensions.get('window').width;

  const [query, setQuery] = useState('')


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


        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 32, color: Theme.mylight, fontWeight: 'bold', width: '80%' }}>Our Category</Text>
        </View>


        <View style={{ padding: 10 }}>
          <View style={{ backgroundColor: Theme.mylight, width: '100%', height: 45, padding: 10, borderRadius: 10, flexDirection: 'row', gap: 10, alignItems: 'center', elevation: 5, borderWidth: 1, borderColor: Theme.main }}>
            <Ionicons name='search' size={22} color={Theme.main} />
            <TextInput placeholderTextColor='gray' placeholder='Search here...' style={{ width: '85%', height: 40, color: Theme.mydark }} onChangeText={value => setQuery(value)} />
          </View>
        </View>

      </View>




      <View style={{ padding: 10 }}>
        

        <View  style={{ flexDirection:'row',alignItems:'center',gap:10,flexWrap:'wrap' }}>


          {data?.filter(i => {
            if (query === '') {
              return i
            }
            else if (i?.name.toLowerCase().includes(query.toLocaleLowerCase())) {
              return i
            }


          })?.map(i => {
            return (<>
              <TouchableOpacity style={{ elevation: 10, backgroundColor: Theme.mylight,  height: 190, borderRadius: 10, width: '48%', justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: 0, borderColor: Theme.main }}>
              <Image source={{uri:i?.image}} style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: 10, }} />
              </TouchableOpacity>
            </>)
          })}

        </View>
      </View>



    </ScrollView>

    
  );
};

export default AllCategory;
