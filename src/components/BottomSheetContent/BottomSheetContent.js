import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BottomSheetButtons from './BottomSheetButtons';

const BottomSheetContent = () => {
  const [button, showButton] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={{paddingTop: 10, alignItems: 'center'}}>
          <View
            style={{
              borderTopWidth: 2,
              borderColor: '#D6D6D6',
              width: 40,
            }}></View>
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              fontFamily: 'Nunito-SemiBold',
              fontSize: 16,
              color: '#000000',
            }}>
            Report
          </Text>

          <Text
            style={{
              fontFamily: 'Nunito-Medium',
              fontSize: 15,
              color: '#000000',
              marginTop: 14,
            }}>
            Please select the appropriate problem to continue
          </Text>
        </View>

        <View style={{width: '76%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BottomSheetButtons
              name="Offensive"
              button={button}
              showButton={showButton}
            />
            <BottomSheetButtons
              name="Inaccurate"
              button={button}
              showButton={showButton}
            />
          </View>
        </View>

        <View style={{width: '76%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BottomSheetButtons
              name="Plagiarism"
              button={button}
              showButton={showButton}
            />
            <BottomSheetButtons
              name="Violation"
              button={button}
              showButton={showButton}
            />
          </View>
        </View>

        <View style={{width: '80%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BottomSheetButtons
              name="Disrespectful"
              button={button}
              showButton={showButton}
            />
            <BottomSheetButtons
              name="Terrorism"
              button={button}
              showButton={showButton}
            />
          </View>
        </View>

        <View style={{width: '80%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BottomSheetButtons
              name="Inappropriate Content"
              button={button}
              showButton={showButton}
            />
          </View>
        </View>

        {button ? (
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 

  centeredView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    height: 51,
    width: 309,
    backgroundColor: '#3A643B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 45,
    marginLeft:20
  },
});

export default BottomSheetContent;
