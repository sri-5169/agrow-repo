import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { ScrollView } from "react-native-gesture-handler"
const colors   = {
  themeColor : "#4263ec",
  white : "#fff",
  background : "#f4f6fc",
  greyish : "#a4a4a4",
  tint : "#2b49c3",
}
const tasks = [ {
  task : "Ploughing",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Levelling",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Manuring",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Sowing",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Manures and Fertilizers",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Irrigation",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Weeding",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Harvesting",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Threshing",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Winnowing",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},{
  task : "Storing",
  icon : "human-white-cane",
  theme : "#008b8b",
  stamp :"Today . 8 PM"
},
]

const CropScheduler = () => {
  const Task = ({task, icon, theme, stamp}) => {
    return (
      <View
      style={{
        backgroundColor : colors.white,
        flexDirection : "row",
        marginHorizontal : 16,
        marginVertical : 4,
        borderRadius : 20,
        paddingHorizontal : 24, 
        paddingVertical : 20,
      }}>
        <View style={{
          flexDirection : "row",
          alignItems : "center",

        }}>
        <MaterialCommunityIcons 
name={icon}
size={40}
style={{
  color : colors.themeColor, 
  backgroundColor : colors.white,
   justifyContent :"flex-end",
  borderRadius : 20, 
  marginHorizontal : 8,
  marginTop : 5,
  opacity : 0.8,
   }}
/>
<Text style={{
  fontSize :20,
  fontWeight : "bold",
  color  : colors.tint
}}>{task}</Text>
        </View>
      </View>
    )
}
  return (
    <View
      style ={{
        flex : 1,
        backgroundColor : colors.themeColor
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.themeColor}/>
      <View style={{backgroundColor : colors.themeColor}}>
        <View style={{padding : 16, flexDirection : "row", justifyContent : "space-between"}}>
<MaterialCommunityIcons 
name="text"
size={30}
style={{color : colors.white}}
/>
<View style={{flexDirection : "row"}}>
<MaterialCommunityIcons 
name="bell-outline"
size={30}
style={{color : colors.white}}
/>
<AntDesign name="user" size ={30} style={{color : colors.white}}/>
</View>

        </View>
        <View style={{padding : 16}}>
          <Text style={{color : colors.white, fontSize : 30}}>
        {"Hello,\n Srinath"}
          </Text>
          <View
          style={{
            paddingHorizontal : 16,
            paddingVertical : 6,
            flexDirection : "row",
            justifyContent : "space-between",
            backgroundColor : colors.tint,
            borderRadius : 20,
            marginVertical : 20, alignItems : "center"
            }}
          >
            <MaterialCommunityIcons 
name="magnify"
size={30}
style={{color : colors.white}}
/>
<View style={{flexDirection : "row"}}>
<MaterialCommunityIcons 
name="microphone"
size={30}
style={{color : colors.white}}
/>
<MaterialCommunityIcons 
name="tune"
size={30}
style={{color : colors.white}}
/>
</View>
          </View>
        </View>

      </View>

            <View style={{
              padding : 20,
               flexDirection : "row",
                backgroundColor : colors.background,
                 justifyContent : "flex-end",
                 alignItems : "center"
                 }}>
              <Text style={{fontSize : 24}}>Tasks</Text>
              <MaterialCommunityIcons 
name="plus"
size={40}
style={{
  color : colors.themeColor, 
  backgroundColor : colors.white,
   justifyContent :"flex-end",
  borderRadius : 20, 
  marginHorizontal : 8,
   }}
/>
            </View>
   <ScrollView style={{
    backgroundColor : colors.background
   }}>
    {tasks.map(task => <Task 
    task   = {task.task}
    icon = {task.icon}
    theme = {task.theme}
    stamp  = {task.theme}
    />)}
   </ScrollView>
    </View>
  )
}

export default CropScheduler

const styles = StyleSheet.create({})