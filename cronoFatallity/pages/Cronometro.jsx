/*export const Cronometro = ()=>{
    return <h1>Cronometro</h1>
}

export default Cronometro;
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  
    const [hours,setHours] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [customInterval,setCustomInterval] = useState(0);

    const startTimer = () =>{

          setCustomInterval(
              setInterval((e) =>{
                changeTime(e);
                }      
                ,1000
              )
              
          );
    };


    const stopTimer = ()=>{
      if(customInterval){
        clearInterval(customInterval);
    
      } 
    }

    const clear = () =>{
      stopTimer();

      setMinutes(0); 
      setHours(0);
      setSeconds(0); 

    }

    const changeTime = () =>{
      setSeconds((prevState)=>{
        if (prevState+1 == 60){
          setMinutes(minutes + 1);
          return 0;
        }
        return prevState + 1;

      });
      

     /* setMinutes((prevState)=>{
        if (prevState+1 == 60){
          setHours(hours + 1);
          return 0;
        }
        return prevState + 1;

      });
*/
    }

    

    

    

  return (
    <View style={styles.container}>
      <View>

      <Text style ={styles.texto}>Bienvenido al Juego </Text>

<Text style ={styles.textTimer}>
    {hours <10 ? '0'+hours : hours}:
    {minutes <10 ? '0'+minutes : minutes}:
    {seconds <10 ? '0'+seconds : seconds}


</Text>

<StatusBar style="auto" />
<View  style={styles.buttonConteiner}>
    <View style={styles.buttonConteine}> 
        <Button title='Start' onPress={startTimer} />

        <Button title='Clear' onPress={clear}/>

        <Button  title='Stop' onPress={stopTimer}/>


    </View>

</View>



      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column',
    justifyContent : 'flex-start',
    marginTop :10,
  },
  texto : {
    display : 'flex',
    fontSize : 40,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    backgroundColor : '',
    margin : 40,
    marginTop : 380,
    color : 'red'
  },
  textTimer :{
    fontSize : 90,
    backgroundColor : '',
    margin : 2,
    marginTop : 0,
    left : 0

  },
  buttonConteiner : {

  

    flexDirection : 'row',
  justifyContent : 'space-around',
  textAlign : 'center',
  backgroundColor :'red',
    
  },
  buttonConteine : {

  

    flexDirection : 'row',
  justifyContent : 'space-around',
  textAlign : 'center',
  backgroundColor :'',
  height : 20000,
  marginTop : 30,
  left : 110,

  marginHorizontal : -10,

    
    
  },
  button1 : {
    backgroundColor :'blue',
    height : 30,
    width : 40,
  },
  button2 : {
    backgroundColor : 'black',
  }
});