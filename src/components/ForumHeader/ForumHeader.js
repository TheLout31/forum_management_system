import {StyleSheet, View, Dimensions, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import SearchTextInput from './SearchInputText';
import CustomDropDown from '../constantComponents/CustomDropDown';
import Colors from '../../utils/Colors';

const {height, width} = Dimensions.get('window');

const ForumHeader = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const data = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        resizeMethod="cover"
        style={styles.mainImage}
        source={require('../../assets/Images/NavBarForumImage.png')}></ImageBackground>
      <View style={styles.contentContainer}>
        <View>
          <SearchTextInput />
        </View>
        <View style={{flex:1}}>
          <View style={styles.dropDown}>
            <CustomDropDown
              data={data}
              onSelect={handleSelect}
              placeholder="Lifestyle"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForumHeader;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width: width,
    backgroundColor: Colors.neutrals0,
    height: 210,
  },
  mainImage: {
    flex: 1,
    width: '100%',
  },

  contentContainer: {
    position: 'absolute',
    top: 140,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    padding: 5,
  },

  dropDown: {
    width: 135,
    height: 39,
    marginLeft: 10,
  },
});
