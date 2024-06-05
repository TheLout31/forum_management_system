import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import AskYourQuestion from '../AskYourQuestionContainer/AskYourQuestion';
import Colors from '../../utils/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Comment from './FavourCommentsShare/Comment';

const AddShowComments = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.AskYourQuestionContainer}>
        <AskYourQuestion ButtonTitle="add" placeholder="Add your comment" />
      </View>

      {/* FIRST COMMENT */}
      <View style={styles.CommentContainer}>
        <View style={styles.CommentProfileContainer}>
          <View style={styles.avatarCont}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
            />
          </View>

          <View style={styles.CommentProfileNameContainer}>
            <Text
              style={{
                color: Colors.primary100,
                fontFamily: 'Nunito-Medium',
                fontWeight: '500',
                fontSize: 12,
              }}>
              Akash Kaur{' '}
            </Text>
            <Text
              style={{
                color: '#8D8D8D',
                fontFamily: 'Nunito-Light',
                fontSize: 12,
              }}>
              • 3 min
            </Text>
          </View>

          <View style={styles.CommentProfileLikesCont}>
            <EvilIcons name="heart" color="#8D8D8D" size={22} />
            <Text style={styles.mainText}>23</Text>
          </View>
        </View>

        <View style={styles.CommentTextCont}>
          <Text
            style={{
              color: Colors.neutrals900,
              fontWeight: '400',
              fontFamily: 'Nunito-Medium',
              fontSize: 11,
            }}>
            I have recently started Ayurvedic practices and am feeling much
            better and calmer than before. Going Ayurvedic is one of the best
            choices I have taken!
          </Text>
        </View>
      </View>
      {/* FIRST COMMENT */}

      <View
        style={{
          left: 80,
          marginTop: 8,
        }}>
        <View style={styles.plainLine}></View>
      </View>

      {/* SECOND COMMENT */}
      <View style={styles.CommentContainer}>
        <View style={styles.CommentProfileContainer}>
          <View style={styles.avatarCont}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
            />
          </View>

          <View style={styles.CommentProfileNameContainer}>
            <Text
              style={{
                color: Colors.primary100,
                fontFamily: 'Nunito-Medium',
                fontWeight: '500',
                fontSize: 12,
              }}>
              Akash Kaur{' '}
            </Text>
            <Text
              style={{
                color: '#8D8D8D',
                fontFamily: 'Nunito-Light',
                fontSize: 12,
              }}>
              • 3 min
            </Text>
          </View>

          <View style={styles.CommentProfileLikesCont}>
            <EvilIcons name="heart" color="#8D8D8D" size={22} />
            <Text style={styles.mainText}>23</Text>
          </View>
        </View>

        <View style={styles.CommentTextCont}>
          <Text
            style={{
              color: Colors.neutrals900,
              fontWeight: '400',
              fontFamily: 'Nunito-Medium',
              fontSize: 11,
            }}>
            I have recently started Ayurvedic practices and am feeling much
            better and calmer than before. Going Ayurvedic is one of the best
            choices I have taken!
          </Text>
        </View>
      </View>
      {/* SECOND COMMENT */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    width: 301,
  },

  AskYourQuestionContainer: {
    height: 50,
    right: 25,
  },

  CommentContainer: {
    marginTop: 30,
    left: 75,
    marginBottom: 20,
  },

  CommentProfileContainer: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },

  CommentProfileNameContainer: {
    flexDirection: 'row',
  },

  CommentProfileLikesCont: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
  },

  CommentTextCont: {
    width: 250,
    left: 25,
  },
  avatarCont: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
  },
  avatar: {
    width: 28,
    height: 28,
    // objectFit: 'contain',
    borderRadius: 30,
  },

  mainText: {
    marginLeft: 2,
    color: '#8D8D8D',
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },

  plainLine: {
    width: 280,
    borderWidth: 0.6,
    borderColor: '#EDEDED',
    marginBottom: 10,
  },
});

export default AddShowComments;
