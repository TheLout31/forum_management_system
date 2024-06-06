import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ForumHeader from '../components/ForumHeader/ForumHeader';
import ForumQuesAns from '../components/ForumMain/ForumQuesAns';
import {useNavigation} from '@react-navigation/native';
import AddAnsToQuestion from '../components/ForumMain/AddAnsToQuestion.js/AddAnsToQuestion';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ViewAllRepliesScreen = () => {
  const navigation = useNavigation();
  const Questions = [{id: '1'}];

  return (
    <View style={styles.MainContainer}>
      <View style={{}}>
        <View>
          <ForumHeader />
        </View>
        <TouchableOpacity
          style={styles.backButonCont}
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={{marginLeft: 20}}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={{paddingBottom: 20}}>
        {Questions.map(items => (
          <View key={items.id}>
            <View style={styles.QuestionContainer}>
              <View>
                <ForumQuesAns />
              </View>
              <View >
                <AddAnsToQuestion />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor:'white'
  },

  ScrollContainer: {
    flex: 1,
    marginTop: 10,
    padding: 15,
  },

  AskQuesCont: {
    height: 50,
    paddingBottom: 15,
    marginTop: 10,
    marginBottom: 10,
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

  backButonCont: {
    position: 'absolute',
    top: 30,
  },
});

export default ViewAllRepliesScreen;
