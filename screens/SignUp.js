/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/signup.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Inputs name="Full name" icon="user" />
        <Inputs name="Email" icon="envelope" />
        <Inputs name="Phone" icon="phone" />
        <Inputs name="Password" icon="lock" pass={true} />
        <Inputs name="Confirm Password" icon="lock" pass={true} />
        <Submit color="#0251ce" title="CREATE" />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textBody}>Aiready have an account</Text>
          <Text
            style={[styles.textBody, {color: 'blue'}]}
            onPress={() => props.navigation.navigate('Home')}>
            {' '}
            Login here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 200,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 40,
    marginVertical: 5,
  },
  textBody: {
    fontSize: 16,
    fontFamily: 'Foundation',
  },
});
