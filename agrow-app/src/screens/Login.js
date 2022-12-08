
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'; import { StyleSheet
                    , Text
                    , View
                    , TextInput
                    , TouchableOpacity
                    , Keyboard } from 'react-native';
                    const Login = () =>  {
                    const navigation  = useNavigation();
                    return(
                    <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    {/* <Form type="Login"/> */}
                    <div class="login-box">
      <h1>Login</h1>
      <div className="form_div">
        <label>Number</label>
        <input type="email" placeholder="" />
        <label>Password</label>s
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </div>
    </div>
    <p class="para-2">
      Not have an account? <span href="signup.html">Sign Up Here</span>
    </p>
{/*   
                    <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Not a User? </Text>
                    <TouchableOpacity onPress = {() => navigation.navigate("Signup")} ><Text style={styles.signupButton}>Register here</Text></TouchableOpacity>
                    </View>*/}
                    </View> 
                    )
                                      
                  }
                    const styles = StyleSheet.create({ container: {
                    flex: 1,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff',
                    },
                    signupTextCont: { flexGrow: 1,
                    justifyContent: 'center', alignItems: 'flex-end', paddingVertical: 15, flexDirection: 'row',
                    },
                    signupText: { color: '#bd157a', fontSize:15,
                    },
                    signupButton: { color: '#700d49', fontSize:15,
                    fontWeight: '500',
                    }
                    });
                    
                    export default Login ;