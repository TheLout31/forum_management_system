import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForumProfile = ({AddAnswer}) => {
  const [isClicked, setIsCliked] = useState(false);

  const OptionsCloseopen = () => {
    setIsCliked(!isClicked);
  };
  return (
    <View style={styles.profileBox}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profileImgCont}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://i.pinimg.com/736x/ae/76/d8/ae76d87a15bf8d8421ef7811ae989aeb.jpg',
            }}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>Anonymous</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.days}>5 days ago •</Text>
            <Text style={styles.following}> Following</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={OptionsCloseopen} style={{}}>
            <Feather name="more-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {isClicked ? (
        <View style={styles.floatingBox}>
          <TouchableOpacity style={[styles.miniBox, {}]}>
            <View style={styles.IconContainer}>
              <Image
                style={[styles.boxImage, {height: 15, width: 10}]}
                source={require('../../assets/Images/SaveImageLong.png')}
              />
            </View>
            <View style={styles.TextContainer}>
              <Text style={[styles.boxText, {marginRight: 10}]}>Save post</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}
            onPress={AddAnswer}>
            <View style={styles.IconContainer}>
              <Image
                style={styles.boxImage}
                source={require('../../assets/Images/AddAnswer.png')}
              />
            </View>
            <View style={styles.TextContainer}>
              <Text style={[styles.boxText, {marginRight: 38}]}>
                Add answer
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}>
            <View style={styles.IconContainer}>
              <Image
                style={[styles.boxImage, {height: 15, width: 16}]}
                source={require('../../assets/Images/Report.png')}
              />
            </View>

            <View style={styles.TextContainer}>
              <Text style={[styles.boxText, {marginRight: 45}]}>Report</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default ForumProfile;

const styles = StyleSheet.create({
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImgCont: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
  },
  profileImg: {
    height: 44,
    width: 44,
    borderRadius: 40,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    color: '#1E1E1E',
    marginBottom: 5,
  },
  days: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    fontSize: 14,
    color: Colors.neutrals500,
  },
  following: {
    top: 4,
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },

  floatingBox: {
    width: 150,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 25,
    right: 25,
    borderRadius: 8,
    elevation: 5,
    shadowRadius: 2,
    zIndex: 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    paddingVertical: 2,
    display: 'flex',
    justifyContent: 'space-around',
  },
  miniBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 32,
  },
  IconContainer: {
    left: 8,
    flex: 0.8,
  },
  TextContainer: {
    flex: 3,
  },
  boxImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  boxText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#1E1E1E',
  },
});
