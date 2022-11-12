import React, { Component } from 'react';
import { StyleSheet
, Text
, View
, TextInput
, TouchableOpacity
, Keyboard } from 'react-native';
export default class Form extends Component {
constructor(props){ super(props); this.state={
email:'', password: ''
}
}
saveData =async()=>{
const {email,password} = this.state;
let loginDetails={ email: email, password: password
}
if(this.props.type !== 'Login')
{
localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
Keyboard.dismiss();
alert("You have registered successfully. " + 'Your credentials are:- User-ID: ' + email + ' P.W.:' + password);
this.login();
}
else if(this.props.type == 'Login')
{
try{
let loginDetails = await localStorage.getItem('loginDetails');
let ld = JSON.parse(loginDetails);
if (ld.email != null && ld.password != null)
{
if (ld.email == email && ld.password == password)
{
alert('Welcome Back !');
}
else
{
alert('Mentioned Email and Password doesnot exist!');
}
}
}catch(error)
{
alert(error);
}
}
}
showData = async()=>{
let loginDetails = await AsyncStorage.getItem('Login Details Are'); let ld = JSON.parse(loginDetails);
alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
}
render() {
return(
<View style={styles.container}>
<TextInput style={styles.inputBox} onChangeText={(email) => this.setState({email})} underlineColorAndroid='rgba(0,0,0,0)' placeholder="User ID"
placeholderTextColor = "#850c22" selectionColor="#fff" keyboardType="email-address"
onSubmitEditing={()=> this.password.focus()}/>
<TextInput style={styles.inputBox} onChangeText={(password) => this.setState({password})} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Enter Password"
secureTextEntry={true}
placeholderTextColor = "#850c22" ref={(input) => this.password = input}
/>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
</TouchableOpacity>
</View>
)
}
}
const styles = StyleSheet.create({ container: {
justifyContent: 'center', alignItems: 'center',
},
inputBox: {
width: 299, backgroundColor: '#ede8e8', borderRadius: 24,
paddingHorizontal: 15,
fontSize: 15,
color: '#991172',
marginVertical: 9
},
button: {
width: 299,
backgroundColor: '#b8236b', borderRadius: 24,
marginVertical: 9,
paddingVertical: 11
},
buttonText: {
fontSize: 15,
fontWeight: '500', color: '#ffffff', textAlign: 'center'
}
});

