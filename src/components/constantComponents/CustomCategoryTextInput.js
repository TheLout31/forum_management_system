import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import GreenButton from './GreenButton';

const CustomCategoryTextInput = ({placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInputCont}>
        <TextInput
          style={styles.textInputText}
          placeholder={placeholder}
          placeholderTextColor="#7B7B7B"
        />
      </View>

      <View style={styles.buttonContainer}>
        <GreenButton ButtonTitle="Request" />
      </View>
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
  textInputCont: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
  },

  textInputText: {
    height: '100%',
    color: 'black',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
  },

  buttonContainer: {
    height: 31,
    width: 70,
    marginRight: 4,
  },
});

export default CustomCategoryTextInput;
