import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Colors from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInputText = ({placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 2}}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#7B7B7B"
        />
      </View>

      <View style={{flex: 0.4}}>
        <Ionicons name="image-outline" size={20} color={Colors.primary100} />
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

export default CustomInputText;
