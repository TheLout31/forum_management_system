import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Colors from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputTextNoIcon = ({placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#7B7B7B"
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // width: 201,
    height: 39,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 11,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: '100%',
    width: '100%',
    paddingLeft: 14,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
  },
});

export default InputTextNoIcon;
