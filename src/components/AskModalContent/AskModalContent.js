import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import GreenButton from '../constantComponents/GreenButton';
import InputTextNoIcon from '../constantComponents/InputTextNoIcon';
import CustomDropDown from '../constantComponents/CustomDropDown';
import CustomInputText from '../constantComponents/CustomInputText';
import Description from '../ForumMain/AddAnsToQuestion.js/Description';
import CustomCategoryTextInput from '../constantComponents/CustomCategoryTextInput';

const AskModalContent = ({close}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const data = [
    {label: 'Public', value: '1'},
    {label: 'Anonymous', value: '2'},
  ];

  return (
    <View style={{width: '100%'}}>
      <View style={styles.mainContainer}>
        <View style={styles.avatarCont}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://amrutam.co.in/cdn/shop/products/WhyChooseAmrutam_28fb9011-5e3c-40d9-876e-14f74524b55d.jpg?v=1661579390&width=600',
            }}
          />
        </View>
        <View>
          <View style={styles.DropDownContainer}>
            <CustomDropDown
              data={data}
              onSelect={handleSelect}
              placeholder="Public"
            />
          </View>
        </View>

        <View style={styles.ButtonCont}>
          <GreenButton ButtonTitle="Ask" onpress={close} />
        </View>
      </View>

      <View style={{left: 75, position: 'relative'}}>
        <View style={{width: 288, marginTop: 10}}>
          <InputTextNoIcon placeholder="Ask your question here" />
        </View>

        <View style={{height: 98, marginTop: 10, width: 288}}>
          <Description />
        </View>

        <View style={{width: 288, marginTop: 10}}>
          <CustomInputText placeholder="Add attachments" />
        </View>

        <View style={{width: 288, marginTop: 10}}>
          <CustomCategoryTextInput placeholder="Write category" />
        </View>

        <View style={{width: 288, marginTop: 10}}>
          <CustomCategoryTextInput placeholder="Write category" />
        </View>
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

  DropDownContainer: {
    height: 39,
    width: 137,
    marginRight: 10,
  },
  ButtonCont: {
    marginLeft: 70,
    height: 39,
    width: 70,
  },
});

export default AskModalContent;
