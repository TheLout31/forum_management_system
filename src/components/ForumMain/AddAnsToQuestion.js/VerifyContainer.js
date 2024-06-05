import React, {useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import ForumVerifyMessage from './ForumVerifyMessage';

const VerifyContainer = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{top: 10, marginRight: 10}}
        onPress={toggleBoxVisibility}>
        <Image source={require('../../../assets/Images/Info.png')} />
      </TouchableOpacity>

      <View style={{}}>
        <ForumVerifyMessage />
      </View>

      {isBoxVisible && (
        <View style={styles.floatingBox}>
          <View style={styles.floatingBoxTextCont}>
            <Text style={styles.floatingBoxText}>
              Thank you for your contribution! Your answer is currently under
              review. It will be posted once it has been verified by our admin
              team.{' '}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  floatingBox: {
    position: 'absolute',
    top: 30,
    right: 5,
    padding: 10,
    backgroundColor: '#FCDDB8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  floatingBoxTextCont: {
    width: 275,
    padding:5
  },
  floatingBoxText: {
    color: '#B26B17',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default VerifyContainer;
