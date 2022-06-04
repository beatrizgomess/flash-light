import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () =>{
  const [toogle, setToogle] = useState(false);

  const changeStateToogle = () => setToogle(oldValue => !oldValue);
  
  useEffect(()=>{
    //liga flash do celular
    Torch.switchState(toogle);
  },[toogle]);

  useEffect(() =>{
    // Quando o celular for chacoalhado, mudaremos o toogle

    const subscription = RNShake.addListener(() =>{
      setToogle(oldValue => !oldValue);
    })
    //Quando o componente for desmontado
    return () => subscription.remove();
  })

  return <View style={toogle ? style.containerLight : style.container}>
  <TouchableOpacity 
    onPress={changeStateToogle}>
  <Image style={toogle? style.lightImgOn : style.lightImgOff} source={
    toogle
    ? require('./assets/icons/eco-light.png') 
    : require('./assets/icons/eco-light-off.png')}

    />

    <Image 
    style={style.dioLogo}
    source={toogle
    ? require('./assets/icons/logo-dio.png') 
    : require('./assets/icons/logo-dio-white.png')}
      
    />
    </TouchableOpacity>
  </View>
  
}


export default App;


const style = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightImgOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    
  },
  
  lightImgOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white',
  },

  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  

});