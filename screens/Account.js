import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Account = props => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: props.color}]}>
      <FontAwesome style={styles.accIcon} name={props.icon} />
      <Text style={styles.textTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 135,
    height: 45,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  accIcon: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
