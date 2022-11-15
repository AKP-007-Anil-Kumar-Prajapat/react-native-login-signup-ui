/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {LoginPageImage} from '../assets';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from './Account';

const Login = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/login.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{width: '88%'}}>
          <TouchableOpacity>
            <Text style={([styles.textBody], {alignSelf: 'flex-end'})}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <Submit title="LOG IN" color="#0148a4" />
        <Text style={styles.textBody}>Or Connect Using Social Media</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity>
            <Account color="#3b5c8f" icon="facebook" title="Facebook" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Account color="#ec482f" icon="google" title="Google" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>Don't Have an account </Text>
          <TouchableOpacity>
            <Text
              style={[styles.textBody, {color: 'blue'}]}
              onPress={() => props.navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
});
