import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ForumHeader from '../components/ForumHeader/ForumHeader';
import AskYourQuestion from '../components/AskYourQuestionContainer/AskYourQuestion';
import ForumQuesAns from '../components/ForumMain/ForumQuesAns';

const ForumHomeScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={{}}>
        <View>
          <ForumHeader />
        </View>

        <View style={styles.AskQuesCont}>
          <AskYourQuestion />
        </View>
      </View>

      <ScrollView style={styles.ScrollContainer}>
        <View>
          <View style={styles.QuestionContainer}>
            <ForumQuesAns />
          </View>
          <View style={styles.QuestionContainer}>
            <ForumQuesAns />
          </View>
          <View style={styles.QuestionContainer}>
            <ForumQuesAns />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
});

export default ForumHomeScreen;
