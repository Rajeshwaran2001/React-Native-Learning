import React from 'react';
import {
  Text, 
  View,
  ScrollView,
  Image, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

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
  return (
    <ScrollView style={Styles.container}>
      <Image source={require('./assests/logo.png')} style={Styles.logo} />
      <View style={Styles.gridContainer}>
      {soundList.map((Sound) =>(
        <TouchableOpacity key={Sound}  style={Styles.box}>
        <Text style={Styles.text}>{Sound}</Text>
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