import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
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
    <ScrollView>
      <Image source={require('./assests/logo.png')} />
      <View>
      
      </View>
    </ScrollView>
  );
};

export default App;
