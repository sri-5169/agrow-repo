import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Form from "./Form";
import { useNavigation } from "@react-navigation/native";
import "./forms.css";
const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      {/* <Form type="Register"/>
       */}
      <div class="signup-box">
        <h1>Sign Up</h1>
        <h4>It's free and only takes a minute</h4>
        <div className="form_div"> 
          <label>First Name</label>
          <input type="text" placeholder="" />
          <label>Last Name</label>
          <input type="text" placeholder="" />
          <label>Mobile Number</label>
          <input type="text" placeholder="" />
          <label>Password</label>
          <input type="password" placeholder="" />
          <label>Confirm Password</label>
          <input type="password" placeholder="" />
          <input type="button" />
        </div>
        <p>
          By clicking the Sign Up button,you agree to our <br />
          <span>Terms and Condition</span> and <span href="#">Policy Privacy</span>
        </p>
      </div>
      <p class="para-2">
        Already have an account? Sign Up
      </p>

      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Do have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 15,
    flexDirection: "row",
  },
  signupText: { color: "#c7226c", fontSize: 15 },
  signupButton: { color: "#c7226c", fontSize: 15, fontWeight: "500" },
});

export default Signup;
