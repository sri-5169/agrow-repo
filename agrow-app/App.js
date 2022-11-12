import React from "react"
import { View } from "react-native";
import Home from './src/screens/Home';
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import ChatBot from "./src/screens/ChatBot";
import CropScheduler from "./src/screens/CropScheduler";
import DiseasePredictor from "./src/screens/DiseasePredictor";
import ExpenseCalculator from "./src/screens/ExpenseCalculator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
export default function App() {
  const Stack = createNativeStackNavigator();
  return( 
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        
        <Stack.Screen name="Login" component={Login} options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Login",
          headerTitleAlign : "center",
        }}/>
        <Stack.Screen name="Signup" component={Signup} options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Signup",
          headerTitleAlign : "center",
        }}/>
        <Stack.Screen name="About" component={About} 
        options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "About",
          headerTitleAlign : "center",

        }} />
        <Stack.Screen name="Contact" component={Contact} 
        options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Contact",
          headerTitleAlign : "center",

        }} />
        <Stack.Screen name="DiseasePredictor" component={DiseasePredictor} 
        options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Disease Predictor",
          headerTitleAlign : "center",
        }} />
        <Stack.Screen name="CropScheduler" component={CropScheduler} 
        options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Crop Scheduler",
          headerTitleAlign : "center",
        }} />
        <Stack.Screen name="Expense Calculator" component={ExpenseCalculator} options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "Expense Calculator",
          headerTitleAlign : "center",
        }}/>
        <Stack.Screen name="ChatBot" component={ChatBot} 
        options={{
          headerTitleStyle : {
            fontSize : 25,
          },
          headerTitle : "ChatBot",
          headerTitleAlign : "center",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
 
}

