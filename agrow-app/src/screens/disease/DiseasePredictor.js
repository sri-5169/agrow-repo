import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import {crops} from "../../api/CropsList";




const DiseasePredictor = ({navigation}) => {
  const [picture, setPicture] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setPicture(pickerResult.uri);
  }
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={ styles.item }>
        <View style={ styles.avatarContainer }>
          <Image source={ item.image } style={ styles.avatar } />
        </View>      
        <Text style={ styles.name }>{item.name}</Text>
      </View> 
    </TouchableOpacity>
  );

  const oneCrop = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item 
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
      />
    
    );   
    };
  const headerComponent = () => {
    return <Text style={ styles.listHeadline }>Choose the crop</Text>        
  }

  const listSeparator = () => {
    return <View style={ styles.separator } />
  }    


  return (
    <View>
      <View style={styles.container}>
      <Image source={ !picture ? { uri: 'https://i.imgur.com/TkIrScD.png' } : picture} style={styles.logo} />
      <Text style={styles.instructions}>
        Share the Image of the leaf
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      {
        picture && <View style = {styles.apicontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RegionPanel")} style={styles.apibtn}>
            <Text style={styles.buttonText}>Test the {selectedId && crops[selectedId-1].name} crop</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
    
    <SafeAreaView style={ styles.crop_container }>
      <FlatList 
        ListHeaderComponentStyle = { styles.listHeader }
        ListHeaderComponent = { headerComponent }              
        ListEmptyComponent = { <Text>Crops</Text> }
        data = { crops }
        renderItem={oneCrop}        
        ItemSeparatorComponent={ listSeparator}
        keyExtractor={(item)=> item.id}
        extraData ={selectedId}
        />      
    </SafeAreaView>
    </View>
  )
}

export default DiseasePredictor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  apicontainer :{
    paddingTop : -100,
    width : "70%",
    backgroundColor: '#fff',
    marginHorizontal : 118,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  apibtn: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 5,
    width : "fit-content",
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  crop_container: {
    flex: 1,
    marginHorizontal: 21,
    paddingHorizontal : 20,
  },

  listHeader: {
    height: 55,    
    alignItems: 'center',
    justifyContent: 'center',    
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7B52AB',
  },

  listHeadline: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 21,
  },

  item: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    paddingVertical: 13,    
  },

  avatarContainer: {        
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  
  avatar: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
})