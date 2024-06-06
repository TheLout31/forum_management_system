import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ForumHeader from '../components/ForumHeader/ForumHeader';
import AskYourQuestion from '../components/AskYourQuestionContainer/AskYourQuestion';
import ForumQuesAns from '../components/ForumMain/ForumQuesAns';
import {useNavigation} from '@react-navigation/native';


const ForumHomeScreen = () => {
  const navigation = useNavigation();
  const Questions = [{id: '1'}, {id: '2'}, {id: '3'}];

  return (
    <View style={styles.MainContainer}>
      <View style={{}}>
        <View>
          <ForumHeader />
        </View>

        <View style={styles.AskQuesCont}>
          <AskYourQuestion
            ButtonTitle="ask"
            placeholder="Ask your question here"
          />
        </View>
      </View>

      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={{paddingBottom: 20, backgroundColor:'white'}}>
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
});

export default ForumHomeScreen;
