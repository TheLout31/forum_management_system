import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Button,
} from 'react-native';
import ForumHeader from '../components/ForumHeader/ForumHeader';
import AskYourQuestion from '../components/AskYourQuestionContainer/AskYourQuestion';
import ForumQuesAns from '../components/ForumMain/ForumQuesAns';
import {useNavigation} from '@react-navigation/native';
import AskModalContent from '../components/AskModalContent/AskModalContent';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetContent from '../components/BottomSheetContent/BottomSheetContent';
import ToughtsQues from '../components/ThoughtsComponent/ToughtsQues';

const ForumHomeScreen = () => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const Questions = [{id: '1'}, {id: '2'}, {id: '3'}];
  const Thoughts = [
    {id: '1', attach: 'Image'},
    {id: '2', attach: 'Doc'},
  ];
  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  const toggleContainerVisibility = () => {
    setIsContainerVisible(!isContainerVisible);
  };

  return (
    <View style={styles.MainContainer}>
      <View style={{}}>
        <View>
          <ForumHeader />
        </View>

        <TouchableOpacity
          style={styles.AskQuesCont}
          onPress={toggleContainerVisibility}>
          <AskYourQuestion
            ButtonTitle="ask"
            placeholder="Ask your question here"
          />
        </TouchableOpacity>

        {isContainerVisible && (
          <View style={styles.FloatingContainer}>
            <AskModalContent close={toggleContainerVisibility} />
          </View>
        )}
      </View>

      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={{paddingBottom: 20, backgroundColor: 'white'}}>
        {Thoughts.map(items => (
          <View key={items.id}>
            <View style={styles.QuestionContainer}>
              <View>
                <ToughtsQues
                  Attachment={items.attach}
                  report={openBottomSheet}
                />
              </View>
            </View>
          </View>
        ))}

        {Questions.map(items => (
          <View key={items.id}>
            <View style={styles.QuestionContainer}>
              <View>
                <ForumQuesAns />
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ViewAllScreen');
                }}>
                <Text style={styles.viewAllButton}>View All Replies</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        height={400}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          container: {
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: '#A0A0A0',
            width: 40,
            height: 4,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: true,
        }}>
        <View style={styles.bottomSheetcont}>
          <BottomSheetContent />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  ScrollContainer: {
    position: 'relative',
    flex: 1,
    marginTop: 10,
    padding: 15,
  },

  AskQuesCont: {
    
    height: 70,
    paddingBottom: 15,
    marginTop: 10,
  },

  QuestionContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  viewAllButton: {
    color: Colors.primary100,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Nunito-Medium',
  },
  FloatingContainer: {
    padding: 10,
    position: 'absolute',
    elevation: 1,
    top: 215,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    // backgroundColor: 'rgba(128, 128, 128, 0.8)',

    width: Dimensions.get('window').width,

    alignItems: 'center',
    zIndex: 100,
  },

  bottomSheetcont: {
    flex: 1,
    width: '100%',
    height: '100%',
    // paddingRight: 10,
    // paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
});

export default ForumHomeScreen;
