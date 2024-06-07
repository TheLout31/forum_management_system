import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import GreenButton from '../constantComponents/GreenButton';
import InputTextNoIcon from '../constantComponents/InputTextNoIcon';
import CustomCategoryTextInput from '../constantComponents/CustomCategoryTextInput';

const AskYourQuestion = ({ButtonTitle, placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarCont}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://amrutam.co.in/cdn/shop/products/WhyChooseAmrutam_28fb9011-5e3c-40d9-876e-14f74524b55d.jpg?v=1661579390&width=600',
          }}
        />
      </View>

      <TouchableOpacity style={styles.InputContainer}>
        <InputTextNoIcon placeholder={placeholder} />
      </TouchableOpacity>

      <View style={styles.ButtonCont}>
        <GreenButton
          ButtonTitle={ButtonTitle}
          onpress={() => alert('functionality not added')}
        />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarCont: {
    marginLeft: 10,
    width: 41,
    height: 41,
    borderRadius: 40,
    alignItems: 'center',
    marginRight: 15,
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 40,
  },

  InputContainer: {
    width: 216,
    marginRight: 10,
  },
  ButtonCont: {
    width: 70,
  },
});

export default AskYourQuestion;
