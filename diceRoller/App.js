import React, {useState} from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  StatusBar,
} from 'react-native'
import DiceOne from './Assests/dice1.png'
import DiceTwo from './Assests/dice2.png'
import DiceThree from './Assests/dice3.png'
import DiceFour from './Assests/dice4.png'
import DiceFive from './Assests/dice5.png'
import DiceSix from './Assests/dice6.png'


const App = () => {
  
  const [uri, setUri] = useState(DiceOne);

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
  };
  return(
<>
<StatusBar style={{backgroundColor:'rgb(0,0,0)'}} />
<View style={Styles.container}>
 <Image style={Styles.image} source={uri} />
 <TouchableOpacity onPress={playButtonTapped}>
    <Text style={Styles.text}>Play Game</Text>
    </TouchableOpacity>
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
  }
})