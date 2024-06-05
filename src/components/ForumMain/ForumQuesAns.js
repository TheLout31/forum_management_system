import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
  Easing,
} from 'react-native';
import ForumProfile from './ForumProfile';
import ForumQuestion from './ForumQuestion';
import ForumReply from './ForumReply';
import Favours from './FavourCommentsShare/Favours';
import Comment from './FavourCommentsShare/Comment';
import Share from './FavourCommentsShare/Share';
import AddShowComments from './AddShowComments';
import AddAnsToQuestion from './AddAnsToQuestion.js/AddAnsToQuestion';
import VerifyContainer from './AddAnsToQuestion.js/VerifyContainer';

const ForumQuesAns = () => {
  const [openComments, setOpenComments] = useState(false);
  const [openAddAnswer, setAddAnswer] = useState(false);
  const [ShowVerifyAns, setShowVerifyAns] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heightAnim, {
        toValue: openComments ? 1 : 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: openComments ? 1 : 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [openComments]);

  const CommentClick = () => {
    setOpenComments(!openComments);
  };

  const AddAnswerClick = () => {
    setAddAnswer(!openAddAnswer);
  };

  const ShowVerifyAnsClick = () => {
    setShowVerifyAns(!ShowVerifyAns);
  };

  return (
    <View style={{}}>
      <View>
        <ForumProfile AddAnswer={AddAnswerClick} />
      </View>

      <View>
        <ForumQuestion />
      </View>

      <View>
        <ForumReply />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 15,
          marginBottom: 10,
        }}>
        <View style={styles.plainLine}></View>
      </View>

      <View style={styles.CommentsShareFavourContainer}>
        <TouchableOpacity>
          <Favours />
        </TouchableOpacity>

        <TouchableOpacity onPress={CommentClick}>
          <Comment />
        </TouchableOpacity>

        <TouchableOpacity>
          <Share />
        </TouchableOpacity>
      </View>

      {openAddAnswer ? (
        <View>
          <AddAnsToQuestion showVerify={ShowVerifyAnsClick} />
        </View>
      ) : null}

      {openComments ? (
        <Animated.View
          style={[styles.animatedContainer, {opacity: opacityAnim}]}>
          <AddShowComments />
        </Animated.View>
      ) : null}

      {ShowVerifyAns ? (
        <View style={{width: 320}}>
          <VerifyContainer />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  plainLine: {
    width: 337,
    borderWidth: 0.6,
    borderColor: '#EDEDED',
    marginBottom: 10,
  },

  CommentsShareFavourContainer: {
    gap: 28,
    flexDirection: 'row',
    left: 10,
    padding: 5,
  },

  animatedContainer: {
    overflow: 'hidden',
  },
});

export default ForumQuesAns;
