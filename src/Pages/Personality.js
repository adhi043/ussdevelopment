import React, { useEffect, useRef } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../myassets/Theme';
import SwiperFlatList from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';

const Personality = ({ navigation }) => {

  var width = Dimensions.get('window').width;

  const slider = [
    {
      image: 'https://blogpakistan.pk/wp-content/uploads/2022/07/Top-religious-scholars-of-Pakistan.jpg',
      text: 'Islamic Scholars'
    },
    {
      image: 'https://www.globalvillagespace.com/wp-content/uploads/2020/12/Changing-Tunes-of-Politicians.jpg',
      text: 'Famous Leaders'
    },
    {
      image: 'https://www.glisten.pk/wp-content/uploads/2022/08/BeFunky-collage-2-1170x600-1-1024x525.webp',
      text: 'Tiktoks Stars'
    },
    {
      image: 'https://houseofpakistan.com/wp-content/uploads/2021/07/pakistani-youtubers.jpg',
      text: 'Youtube Stars'
    },


  ]

  const data = [
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Sehar Bano',
      about: 'Famous Tiktoker'
    },

    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD2FsliW3Jar6FbPJcGTlktLgt_hnQtJ32g&usqp=CAU',
      name: 'Imran Khan',
      about: 'Famous Leader'
    },

    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Sehar Bano',
      about: 'Famous Tiktoker'
    },

    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Sehar Bano',
      about: 'Famous Tiktoker'
    },



  ]


  const swiperRef = useRef(null);


  const onSwiped = (index, direction) => {
    if (swiperRef.current.currentIndex === data.length - 1) {
      setAllCardsSwiped(true);
    }
    if (direction === 'right') {
      console.log('Liked');
    } else if (direction === 'left') {
      console.log('Disliked');
    }
  };



  return (
    <ImageBackground source={{ uri: Theme.img }} blurRadius={Theme.blur} style={{ flex: 1 }}>


      {/* <ScrollView style={{height:'100%'}}> */}

      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Theme.mydarko, borderRadius: 200, width: 45, height: 45, position: 'absolute', right: 10, top: 10 }} onPress={() => {
        navigation.navigate('Notification')
      }}>
        <Ionicons name='notifications' size={25} color={Theme.mydark} />
      </TouchableOpacity>


      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 32, color: Theme.mydark, fontWeight: 'bold', width: '80%' }}>All Favorite Personality</Text>
      </View>







      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{flexDirection:'row' ,justifyContent: 'center', alignItems: 'center',width:'100%' }}>
            <Text style={{ fontSize: 18, color: Theme.mydark, fontWeight: 'bold', textAlign: 'center' }}>Swipe to find your favorite personality</Text>
          </View>

        </View>


        <View style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',width:'100%',marginHorizontal:-10 }}>

          <Swiper
            ref={swiperRef}
            cards={data}
            onSwiped={(index, direction) => onSwiped(index, direction)}
            cardIndex={0}
            backgroundColor={'transparent'}
            stackSize={2}
            stackScale={0}
            stackSeparation={0}
            disableTopSwipe={false}
            disableBottomSwipe={false}
            animateOverlayLabelsOpacity
            animateCardOpacity
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            containerStyle={{ height: 400 }}
            renderCard={(i, index) => (

              <>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 440 }}>

                  <View style={{ borderRadius: 20, backgroundColor: Theme.mydarkt, width: '93%', height: 440, position: 'relative' }}><LinearGradient colors={[
                    'rgba(0,0,0,0.0)',
                    'rgba(0,0,0,0.5)',
                    'rgba(0,0,0,0.7)',

                  ]} style={{ borderRadius: 20, width: '100%', height: 440, position: 'relative' }}>
                    <Image source={{ uri: i?.image }} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20, }} />


                    <View style={{ width: '100%', height: '25%', borderRadius: 20, flexDirection: 'column', padding: 10, marginRight: 10, position: 'absolute', bottom: 0 }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                          <Text style={{ fontSize: 26, color: Theme.mylight, fontWeight: 'bold' }}>{i?.name}</Text>
                          <Text style={{ fontSize: 16, color: Theme.mylight, fontWeight: '600' }}>{i?.about}</Text>
                        </View>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Theme.mylight, borderRadius: 200, width: 45, height: 45 }} onPress={() => {
                          // navigation.navigate('Notification')
                        }}>
                          <Ionicons name='eye' size={25} color={Theme.mydark} />
                        </TouchableOpacity>
                      </View>
                    </View >
                  </LinearGradient>
                  </View>
                </View>
              </>
            )
            }
          />
        </View>
      </View>


      {/* </ScrollView> */}

    </ImageBackground>
  );
};

export default Personality;
