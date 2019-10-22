import React , {useState,useEffect} from 'react';
import {SafeAreaView,ScrollView,AsyncStorage,Button,StyleSheet,Image } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List(navigation){
   const [techs ,setTechs] = useState([]);
   useEffect(() => {
      AsyncStorage.getItem('techs').then(storagedTechs =>{
         const techsArray = storagedTechs.split(',').map(tech => tech.trim());

         setTechs(techsArray);
      })
   }, []);
   return( 
      <SafeAreaView style={styles.container}>
         <Image style={styles.logo} source={logo} />
         <ScrollView>
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
         </ScrollView>
         
      </SafeAreaView>

   )
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
   },
   logo:{
      height: 32,
      resizeMode: "contain",
      alignSelf:'center',
      marginTop:40,
   },
   buttom:{
      height:42,
      width: 80,
      margin:50,
      backgroundColor:'#f05a5b',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 2,
   }, 
   
});