import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useTransition } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppLoading from "expo-app-loading";
import { backgroundColor } from '@shopify/restyle';
const Menu = () => {
  const navigation   = useNavigation();
                    return (
    <View style={styles.menuContainer}>
<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("DiseasePredictor")} 
>
<Image
        style={[styles.menuImage, {
        }]}
        source = {require("../../assets/disease_detector_image.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Disease Predictor</Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("CropScheduler")}
>
<Image
        style={styles.menuImage}
        source = {require("../../assets/calendar_logo.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Crop Scheduler</Text>

</TouchableOpacity>
<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("Expense Calculator")}
>
<Image
        style={[styles.menuImage, {
          borderRadius : "50%",
          // marginLeft : 10,
        }]}
        source = {require("../../assets/expense_logo.gif")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Expense Calculator</Text>
</TouchableOpacity>

<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("ChatBot")}
>
<Image
        style={[styles.menuImage, {
          // borderRadius : "50%",
          border : "1px white solid",
          overflow : "1px"
          // marginLeft : 5,
        }]}
        source = {require("../../assets/chatbot_logo.jpg")}
        resizeMode ="contain"
        />
<Text style = {styles.navLinks}>ChatBot</Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("Contact")}
>
<Image
        style={[styles.menuImage, {
          // borderRadius : "50%",
          border : "1px white solid",
          overflow : "1px"
          // marginLeft : 5,
        }]}
        source = {require("../../assets/contact_logo.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Contact</Text>

</TouchableOpacity>

<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("About")}
>
<Image
        style={[styles.menuImage, {
          overflow : "1px",
          border : "1px solid white",
          borderRadius : 50,

        }]}
        source = {require("../../assets/asd.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>About</Text>

</TouchableOpacity>

<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("Signup")}
>
<Image
        style={[styles.menuImage, {
          overflow : "1px",
          border : "1px solid white",
          borderRadius : 50,

        }]}
        source = {require("../../assets/asd.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Signup</Text>

</TouchableOpacity>

<TouchableOpacity 
style={styles.menuCard}
onPress = {() => navigation.navigate("Login")}
>
<Image
        style={[styles.menuImage, {
          overflow : "1px",
          border : "1px solid white",
          borderRadius : 50,

        }]}
        source = {require("../../assets/asd.jpeg")}
        resizeMode ="contain"
        />
<Text style={styles.navLinks}>Login</Text>

</TouchableOpacity>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  menuContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around",
        backgroundColor :"#fff",
        width : "100%",
  },
menuCard : {

                    flexDirection : "row",
                    flexWrap : "wrap",
                    justifyContent  : "center",
                    alignItems: "space-around",
                    height : 200,
                    width : "40%",
                    padding  : 10,
                    backgroundColor : "rgba(255, 255,255,0.90)",
                    textAlign : "center", 
                    borderRadius : 5,
                    shadowColor  : "green",
                    shadowOffset : {width : 0, height : 0},
                    shadowOpacity : 0.9,
                    shadowRadius : 100,
                    elevation : 10,
                    marginBottom : 10,
                    
},
navLinks :{
                    fontSize : 12,
                    padding : "10px",

},
menuImage : {
    height : undefined,
    width :140,
    aspectRatio : 1,
    display : "flex",
    zIndex : 1,
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 20,
    backgroundColor : "white",
}
})
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import AppLoading from "expo-app-loading";
// const Menu = () => {
//   const navigation   = useNavigation();

//                     return (
//     <View style={styles.menuContainer}>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("DiseasePredictor")}
// >
// <Text style={styles.navLinks}>Disease Predictor</Text>
// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("About")}
// >
// <Text style={styles.navLinks}>About</Text>

// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("Contact")}
// >
// <Text style={styles.navLinks}>Contact</Text>

// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("Login")}
// >
// <Text style={styles.navLinks}>Login</Text>

// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("Signup")}
// >
// <Text style={styles.navLinks}>Signup</Text>

// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("CropScheduler")}
// >
// <Text style={styles.navLinks}>Crop Scheduler</Text>

// </TouchableOpacity>
// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("Expense Calculator")}
// >
// <Text style={styles.navLinks}>Expense Calculator</Text>
// </TouchableOpacity>

// <TouchableOpacity 
// style={styles.menuContainer}
// onPress = {() => navigation.navigate("ChatBot")}
// >
// <Text style = {styles.navLinks}>ChatBot</Text>
// </TouchableOpacity>
//     </View>
//   )
// }

// export default Menu

// const styles = StyleSheet.create({
// menuContainer : {
//                     flexWrap : "wrap",
//                     flexDirection : "row",
//                     justifyContent  : "space-evenly",
// },
// navLinks :{
//                     fontSize : 20,
//                     border : "1px solid grey",
//                     padding : "10px",
//                     borderRadius : "1rem",
//                     margin : "5px",
// }
// })