import React from 'react';
import { StyleSheet,TouchableOpacity, Text } from 'react-native';
import Colors from '../../utils/Colors';

const GreenButton = ({onpress, ButtonTitle}) => {
    return (
        <TouchableOpacity
        style={styles.btnStyle}
        onPress={onpress}
      >
        <Text style={styles.btnText}>{ButtonTitle}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        width: "100%",
        height:'100%',
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        textAlign:'center'
        
      },
    
      btnText: {
        fontFamily: "SemiBold",
        color: "white",
        fontSize: 16,
        fontFamily:'Nunito-SemiBold'
      },
})

export default GreenButton;
