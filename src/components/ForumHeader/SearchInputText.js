import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchTextInput = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 2}}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#7B7B7B"
        />
      </View>

      <View style={{flex: 0.5}}>
        <AntDesign name="arrowright" size={20} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 201,
    height: 39,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  textInput: {
    height: '100%',
    width: '84%',
    padding: 10,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
});

export default SearchTextInput;
