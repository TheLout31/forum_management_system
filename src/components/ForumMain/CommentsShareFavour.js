import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const color = '#8D8D8D';
const CommentsShareFavour = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          borderWidth: 0.6,
          borderColor: '#EDEDED',
          marginBottom: 10,
        }}></View>

      <View
        style={{
          justifyContent: 'space-evenly',
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 24,
          alignItems: 'center',
        }}>
        <View style={styles.container}>
          <EvilIcons name="heart" color="#8D8D8D" size={20} />
          <Text style={styles.mainText}>23 Favours</Text>
        </View>
        <View style={styles.container}>
        <EvilIcons name="comment" color="#8D8D8D" size={20} />
          <Text style={[styles.mainText, {marginTop: -1}]}>2 Comments</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={{height: 15, width: 15}}
            source={require('../../assets/Images/PaperPlane.png')}
          />
          <Text style={styles.mainText}>32 Shares</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsShareFavour;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 14,
    paddingHorizontal: 20,
    marginBottom: 19,
  },
  container: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  mainText: {
    marginLeft: 7,
    color: '#8D8D8D',
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
});
