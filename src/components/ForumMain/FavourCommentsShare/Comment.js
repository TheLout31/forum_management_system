import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Comment = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="comment" color="#8D8D8D" size={20} />
      <Text style={[styles.mainText, {marginTop: -1}]}>2 Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
      container: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
      mainText: {
        marginLeft: 7,
        color: '#8D8D8D',
        fontFamily: 'Nunito-Regular',
        fontSize: 10,
      },
});

export default Comment;
