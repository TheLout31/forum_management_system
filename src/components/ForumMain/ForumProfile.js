import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const ForumProfile = ({setisCliked, isCliked}) => {
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
      </View>
      <View>
        <TouchableOpacity onPress={() => setisCliked(!isCliked)}>
          <Feather name="more-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>
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
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
});
