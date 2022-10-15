import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AppLoading from "expo-app-loading";
const Menu = () => {
  const navigation   = useNavigation();

                    return (
    <View style={styles.menuContainer}>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("DiseasePredictor")}
>
<Text style={styles.navLinks}>Disease Predictor</Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("About")}
>
<Text style={styles.navLinks}>About</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("Contact")}
>
<Text style={styles.navLinks}>Contact</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("Login")}
>
<Text style={styles.navLinks}>Login</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("Signup")}
>
<Text style={styles.navLinks}>Signup</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("CropScheduler")}
>
<Text style={styles.navLinks}>Crop Scheduler</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("Expense Calculator")}
>
<Text style={styles.navLinks}>Expense Calculator</Text>
</TouchableOpacity>

<TouchableOpacity 
style={styles.menuContainer}
onPress = {() => navigation.navigate("ChatBot")}
>
<Text style = {styles.navLinks}>ChatBot</Text>
</TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
menuContainer : {
                    flexWrap : "wrap",
                    flexDirection : "row",
                    justifyContent  : "space-evenly",
},
navLinks :{
                    fontSize : 20,
                    border : "1px solid grey",
                    padding : "10px",
                    borderRadius : "1rem",
                    margin : "5px",
}
})