import React, {useState} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  StatusBar,
  Pressable,
} from 'react-native'
import DiceOne from './Assests/dice1.png'
import DiceTwo from './Assests/dice2.png'
import DiceThree from './Assests/dice3.png'
import DiceFour from './Assests/dice4.png'
import DiceFive from './Assests/dice5.png'
import DiceSix from './Assests/dice6.png'


const App = () => {
  
  const [uri, setUri] = useState(DiceOne);
  const [uri1, setUri1] = useState(DiceOne);

  const playButtonTapped =() =>{
    let randomNumber = Math.floor(Math.random()*6) +1;

    switch(randomNumber){
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;

      default:
          setUri(DiceOne)
          break;
    }
    let randomNumber1 = Math.floor(Math.random()*6) +1;

    switch(randomNumber1){
      case 1:
        setUri1(DiceOne)
        break;
      case 2:
        setUri1(DiceTwo)
        break;
      case 3:
        setUri1(DiceThree)
        break;
      case 4:
        setUri1(DiceFour)
        break;
      case 5:
        setUri1(DiceFive)
        break;
      case 6:
        setUri1(DiceSix)
        break;

      default:
          setUri1(DiceOne)
          break;
    }
  };
 
  return(
<>
<StatusBar style={{backgroundColor :'#0F4C75'}} />
<View style={Styles.container}>
<Pressable onPress={playButtonTapped}>
<Image style={Styles.image} source={uri} />
<Image style={Styles.image} source={uri1} />
</Pressable>
 
 <Pressable onPress={playButtonTapped}>
    <Text style={Styles.text}>Play Game</Text>
    </Pressable>
</View>

</>
  );
};

export default App;

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:30,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius:5,
    borderWidth: 3,
    fontWeight: "bold",
    textTransform:"uppercase",
  },
  image:{
    width: 200,
    height: 200,
  },
  status:{
    backgroundColor: "rgb(10,10,10)",
  }
})