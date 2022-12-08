import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import "../forms.css";
import { useNavigation } from '@react-navigation/native';
const RegionPanel = () => {
  const navigation = useNavigation();
  const callModel = async () => {

      // const result  = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=80abbdb5105e4c92bd0ccf56fcaeda50")
      // result && console.log(result);
      // // 80abbdb5105e4c92bd0ccf56fcaeda50
      // window.setTimeout(navigation.navigate("Home"), 50000);
  }
  return (
    <View>
      <Text style = {styles.heading}>Select Your Region</Text>
      <View style={styles.currlocation}>
        <Text style={styles.curr_label}>Your current Location</Text>
        {/* <CheckBox
        center
      title="Click Here"
      checked={true}
    /> */}
    <input type="checkbox" />
      </View>
      <div className='form_div'>
          <label>State</label>
          <select placeholder="Select_State" > 
          <option value="Uttar_Pradesh">Uttar Pradesh</option>
          <option value="Bihar">Bihar</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Madhya_Pradesh">Madhya Pradesh</option>
          </select>
          <label>District</label>
          <select placeholder="Select_District" >
          <option value="Varanasi">Varanasi</option>
          <option value="Prayagraj">Prayagraj</option>
          <option value="Mirzapur">Mirzapur</option>
          <option value="Chandauli">Chandauli</option>
          </select>
          
      <TouchableOpacity style={styles.submitBtn}  onPress = {() => navigation.navigate("Cure")}>
        <Text style={styles.cure_btn}>Find Cure</Text>
      </TouchableOpacity>
        </div>
    </View>
  )
}

export default RegionPanel

const styles = StyleSheet.create({
  heading :{
    fontSize : 30,
    textTransform : "uppercase",
    fontWeight : "bold",
  },
  currlocation : {
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    fontSize : 25,
    marginHorizontal : 70,
  },
  submitBtn:{
    width: "100%",
    padding: "7px",
    border: "none",
    border: "1px solid gray",
    borderRadius: "6px",
    outline: "none",
    width: "320px",
    height: "35px",
    marginTop: "20px",
    backgroundColor: "#49c1a2",
    color: "white",
    display : "flex",
    justifyContent : "center",
    alignItems  :"center",
    fontSize: "18px",
  },  
  curr_label: {
    fontSize : 20,
    flex:1
  },
  cure_btn:{
    fontSize : 20,
    fontWeight : "bold",

    
  }

})