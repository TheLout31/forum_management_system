import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Share = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={{height: 15, width: 15}}
        source={require('../../../assets/Images/PaperPlane.png')}
      /> */}
      <MaterialCommunityIcons name="share-outline" color="#8D8D8D" size={20} />
      <Text style={styles.mainText}>32 Shares</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 14,
        paddingHorizontal: 10,
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

export default Share;
