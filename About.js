import { FlatList, Image, StyleSheet,  Text,  TouchableOpacity,  View } from 'react-native'
import React, { useEffect } from 'react'
import aboutList from "../api/AboutList.js"
const About = () => {
  useEffect(() => {
    console.log(aboutList);
  }, []);
  const aboutCard = ({item}) => {
    return ( <View style={styles.mainContainer} >
      <View style={styles.aboutContainer}>
        <View>
          <Image 
          resizeMode='contain'
          style={styles.cardImage}
          source = {item.img}/>
        </View>
        <Text style={styles.cardTitle}> {item.name}</Text>
        <Text style={styles.cardTitle}> {item.name}</Text>
        <Text style={styles.cardTitle}> {item.name}</Text>
        <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.buttonText}>
          <Text> LinkedIn </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }
  return (
    <View>
     <FlatList 
     data={aboutList}
     keyExtractor = {(item) => item.id}
     renderItem= {aboutCard}>
    </FlatList>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  cardImage : {
    width : "100%",
    height : undefined,
    aspectRatio : 1,
  },
  mainContainer : {
    paddingHorizontal : 20
  },
  aboutContainer : {
    padding  : 30,
    backgroundColor : "rgba(255, 255,255,0.90)",
    textAlign : "center", 
    borderRadius : 5,
    shadowColor  : "grey",
    shadowOffset : {width : 0, height : 0},
    shadowOpacity : 0.5,
    shadowRadius : 8,
    elevation : 8,
    marginVertical : 30,
  }
})