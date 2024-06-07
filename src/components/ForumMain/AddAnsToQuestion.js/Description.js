import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const Description = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add description"
          placeholderTextColor="#7B7B7B"
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 1.5,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 28,
    
  },
  wordCount: {
    color: '#B6B6B6',
    fontSize: 10,
    flex: 1,
  },
  contentContainer: {
    width: 293,
    alignItems:'center',
    marginBottom: 5,
  },
  textInput: {
    width: '90%',
    height: '90%',
    textAlignVertical: 'top',
    textAlign: 'left',
    color: 'black',

    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    
  },
});

export default Description;
