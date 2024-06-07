// Dropdown.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors';
const CustomDropDown = ({data, onSelect, placeholder}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
    setShowOptions(false);
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedItem}
        onPress={() => setShowOptions(!showOptions)}>
        <View style={{flex: 1, bottom: 6, right: 10}}>
          <Text style={styles.selectedItemText}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        </View>
        {showOptions ? (
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-up-outline"
              color={Colors.primary100}
              size={20}
            />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-down-outline"
              color={Colors.neutrals1000}
              size={20}
            />
          </View>
        )}
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.value.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  selectedItem: {
    maxHeight: '100%',
    height: '100%',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  selectedItemText: {
    paddingTop: 15,
    paddingLeft: 20,
    fontSize: 12,
    color: '#7B7B7B',
    fontFamily: 'Nunito-Regular',
  },
  optionsContainer: {
    position: 'absolute',
    top: 40,
    width: '100%',
    height:70,
    backgroundColor: Colors.neutrals0,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
});

export default CustomDropDown;
