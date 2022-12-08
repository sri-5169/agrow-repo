import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CreateCard from "./Crop_card";

const Cure = () => {
  return (
    <View>
        <View style={{display : "flex", flexDirection : "column", alignItems : 'center'}}>
        <h4>Potato</h4>
        <h5>Early Blight</h5>
        <Image 
        style={{height : undefined, width : "80%", aspectRatio : 1}}
        source = {require("../../../assets/leaf.JPG")}/>
        </View>
      <CreateCard />
    </View>
  );
};

export default Cure;

const styles = StyleSheet.create({});
