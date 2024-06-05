import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForumVerifyMessage = ({Report}) => {
  const [isClicked, setIsCliked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileBox}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://amrutam.co.in/cdn/shop/products/WhyChooseAmrutam_28fb9011-5e3c-40d9-876e-14f74524b55d.jpg?v=1661579390&width=600',
            }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Dr. Liam Mathews</Text>
            <Text style={styles.days}>12 hours ago</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setIsCliked(!isClicked)}>
          <Feather name="more-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.answerBox}>
        <Text style={styles.answerBoxText}>
          Ans. Ayurveda offers holistic approaches like herbal remedies,
          lifestyle adjustments, and relaxation techniques to alleviate stress
          and support mental well-being. It emphasizes personalized care and
          natural methods to address the root causes of mental health
          challenges, promoting balance and harmony in mind and body.
        </Text>
      </View>

      {isClicked ? (
        <View style={styles.floatingBox}>
          <TouchableOpacity style={[styles.miniBox]}>
            <Image
              style={[styles.boxImage, {height: 15, width: 10}]}
              source={require('../../../assets/Images/SaveImageLong.png')}
            />
            <Text style={[styles.boxText, {marginRight: 10}]}>Save Answer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}
            onPress={Report}>
            <Ionicons name="settings-outline" color="black" size={15} />
            <Text style={[styles.boxText, {marginRight: 38}]}>Send tips</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.miniBox,
              {borderTopWidth: 1, borderTopColor: '#EDEDED'},
            ]}>
            <Image
              style={[styles.boxImage, {height: 15, width: 16}]}
              source={require('../../../assets/Images/Report.png')}
            />

            <Text style={[styles.boxText, {marginRight: 45}]}>Report</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ForumVerifyMessage;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F3FAF1',
    marginTop: 10,
    borderRadius: 9,
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  profileImg: {
    height: 36,
    width: 36,
    borderRadius: 36,
  },
  nameContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#3A643B',
    marginBottom: 2,
    fontWeight: '400',
  },
  days: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    fontSize: 12,
    color: Colors.neutrals500,
  },
  answerBox: {
    padding: 5,
    marginHorizontal: 18,
  },
  answerBoxText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 11,
    fontWeight: '500',
    color: '#000000',
  },

  floatingBox: {
    width: 150,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 40,
    right: 40,
    borderRadius: 8,
    elevation: 5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
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
  boxImage: {
    resizeMode: 'contain',
  },
  boxText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: '#1E1E1E',
  },
});
