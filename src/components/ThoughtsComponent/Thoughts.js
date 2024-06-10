import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';

const Thoughts = ({index}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.question}>
          <Text style={styles.QuestionText}>Thought :</Text>
          Can Ayurveda help with stress and mental health issues?{' '}
        </Text>
      </View>

      
    </View>
  );
};

export default Thoughts;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },

  QuestionText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
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
    paddingLeft: 0,
  },

  edibleSign: {
    height: 30,
    padding: 5,
    borderRadius: 64,
    backgroundColor: '#F3FAF1',
    textAlign: 'center',
    marginLeft: 8,
  },

  edibleSignText: {
    color: '#3A643B',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
  },
});
