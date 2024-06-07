import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Description from './Description';
import CustomInputText from '../../constantComponents/CustomInputText';
import GreenButton from '../../constantComponents/GreenButton';

const AddAnsToQuestion = ({showVerify, Cancel}) => {
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <View style={styles.avatarCont}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://amrutam.co.in/cdn/shop/products/WhyChooseAmrutam_28fb9011-5e3c-40d9-876e-14f74524b55d.jpg?v=1661579390&width=600',
          }}
        />
      </View>
      <View>
        <View style={{width: 293, height: 157}}>
          <Description />
        </View>

        <View style={{width: 293, marginTop: 15}}>
          <CustomInputText placeholder="Add attachment" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity style={{flex: 0.2, left: 100}} onPress={Cancel}>
            <Text
              style={{
                fontFamily: 'Nunito-Medium',
                fontWeight: '500',
                fontSize: 12,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>

          <View style={{width: 86, height: 39, left: 150}}>
            <GreenButton ButtonTitle="Upload" onpress={showVerify} />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 10,
            right: 50,
          }}>
          <View style={styles.plainLine}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarCont: {
    width: 41,
    height: 41,
    borderRadius: 40,
    alignItems: 'center',
    marginRight: 15,
    marginTop: 25,
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 40,
  },
  plainLine: {
    width: 337,
    borderWidth: 0.6,
    borderColor: '#EDEDED',
    marginBottom: 10,
  },
});

export default AddAnsToQuestion;
