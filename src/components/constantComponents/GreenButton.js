import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Colors from '../../utils/Colors';

const GreenButton = ({onpress, ButtonTitle}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onpress}>
      <Text style={styles.btnText}>{ButtonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    textAlign: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
  },
});

export default GreenButton;
