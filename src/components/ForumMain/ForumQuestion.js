import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';

const ForumQuestion = ({index}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.question}>
        Q. Can Ayurveda help with stress and mental health issues?{' '}
      </Text>
      <View style={styles.subQuestionCont}>
        <Text style={styles.subQuestion}>
          I want to the benefits of Ayurvedic products
        </Text>
      </View>

      <View style={styles.Properties}>
        <View style={styles.edibleSign}>
          <Text
            style={styles.edibleSignText}>
            General Ayurveda
          </Text>
        </View>

        <View style={styles.edibleSign}>
          <Text
            style={styles.edibleSignText}>
            Basic of Ayurveda
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.replies}>Replies</Text>
        {index % 2 !== 0 ? (
          <Text style={styles.reply}> • 1 reply</Text>
        ) : (
          <Text style={styles.reply}> • 3 replies</Text>
        )}
      </View>
    </View>
  );
};

export default ForumQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },

  question: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: '#000000',
  },
  replies: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#8D8D8D',
  },
  reply: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#3A643B',
  },

  subQuestionCont: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  subQuestion: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    fontWeight: '500',
    color: '#1E1E1E',
  },

  Properties: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft:0,
  },

  edibleSign: {
    height: 30,
    padding: 5,
    borderRadius: 64,
    backgroundColor: '#F3FAF1',
    textAlign: 'center',
    marginLeft:8
  },

  edibleSignText: {
    color: '#3A643B',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
  },
});
