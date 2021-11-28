import React from 'react'
import {
  Text, 
  View,
  ScrollView,
  Image, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Sound from 'react-native-sound'

const soundList = [
  require('./assests/one.wav'),
  require('./assests/two.wav'),
  require('./assests/three.wav'),
  require('./assests/four.wav'),
  require('./assests/five.wav'),
  require('./assests/six.wav'),
  require('./assests/seven.wav'),
  require('./assests/eight.wav'),
  require('./assests/nine.wav'),
  require('./assests/ten.wav'),
];

const App = () => {
  const playSound = (sound) =>{
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("Not able to play");
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 100)

    soundVar.release();
  };

  return (
    <ScrollView style={Styles.container}>
      <Image source={require('./assests/logo.png')} style={Styles.logo} />
      <View style={Styles.gridContainer}>
      {soundList.map((sound) =>(
        <TouchableOpacity 
        key={sound}
       style={Styles.box}
       onPress={() => {
        playSound(sound);
       }}>
        <Text style={Styles.text}>{sound}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </ScrollView>
  );
};

export default App;

const Styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor : '#1b262c'
  },
  logo:{
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer:{
    flex:1,
    margin: 5,
    flexDirection:'row',
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
},
  box:{
    height:110,
    alignItems:"center",
    justifyContent:"center",
    width:"46%",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:5,
    shadowColor:"#393e46",
    elevation:5,
  },
  text:{
    fontSize: 50,
    color:'#ff4301',
  }
})