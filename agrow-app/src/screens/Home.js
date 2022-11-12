import { Image, StyleSheet, Text, View } from 'react-native';
import * as React  from 'react';
import { StatusBar } from 'expo-status-bar';
import Menu from '../components/Menu';

const Home = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop} >
        <Image
        style={styles.headerImage}
        source = {require("../../assets/home_page_image.jpg")}
        resizeMode ="contain"
        />
      <Text style = {styles.mainHeader}>Welcome To </Text>
      <Text 
        style = {[styles.mainHeader, {
        fontSize : 33, 
        color : "#4c5dab",
        marginTop : 0,
        marginBottom  : 20,
      }]}>AGROW</Text>
      <StatusBar style="auto" />
      </View>
      <View style={[styles.lineStyle, {
                    marginVertical : 20,
      }]}>
                    <Menu/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  mainContainer: {
    height : "100%",
    display : "flex",
    justifyContent : "space-between",
    paddingHorizontal : 20,
    backgroundColor : "#fff",
    textAlign : "center",
  },
  homeTop :{
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
//     paddingHorizontal : 10,
  },
  headerImage : {
    marginTop : 10,
    height : undefined,
    width :"80%",
    aspectRatio : 1,
    display : "flex",
    alignItems : "stretch",
    borderRadius : 20,
    // backgroundColor : "grey",
  },
  mainHeader : {
    fontSize : 30,
    color : "#344055",
    textTransform : "uppercase"
  },
  paraStyle : {
    textAlign : "left",
    fontSize : 19,
    color : "#7d7d7d",
    marginTop : 30,
    paddingBottom : 50,
    lineHeight : 26,
  },
  lineStyle : {
                    marginBottom : 20,
                    // borderWidth : 1,
                    borderColor : "grey"
  }
});

export default Home
