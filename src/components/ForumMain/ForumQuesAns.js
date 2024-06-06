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
import Colors from '../../utils/Colors';

const ForumQuesAns = () => {
  const [openAddAnswer, setAddAnswer] = useState(false);
  const [ShowVerifyAns, setShowVerifyAns] = useState(false);
  const [showAllReplies, setShowAllReplies] = useState(false);
  const [activeCommentReplyId, setActiveCommentReplyId] = useState(null);

  const heightAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heightAnim, {
        toValue: activeCommentReplyId ? 1 : 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: activeCommentReplyId ? 1 : 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [activeCommentReplyId]);

  const CommentClick = replyId => {
    setActiveCommentReplyId(activeCommentReplyId === replyId ? null : replyId);
  };

  const AddAnswerClick = () => {
    setAddAnswer(!openAddAnswer);
  };

  const ShowVerifyAnsClick = () => {
    setShowVerifyAns(!ShowVerifyAns);
  };

  // const handleViewAllClick = () => {
  //   navigation.navigate('ViewAllScreen');
  // };

  const replies = [{id: '1'}, {id: '2'}, {id: '3'}];
  const visibleReplies = showAllReplies ? replies : replies.slice(0, 2);

  return (
    <View>
      <View>
        <ForumProfile AddAnswer={AddAnswerClick} />
      </View>

      <View>
        <ForumQuestion />
      </View>

      {openAddAnswer ? (
        <View>
          <AddAnsToQuestion
            showVerify={ShowVerifyAnsClick}
            Cancel={AddAnswerClick}
          />
        </View>
      ) : null}

      {visibleReplies.map(reply => (
        <View key={reply.id}>
          <ForumReply />

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

            <TouchableOpacity onPress={() => CommentClick(reply.id)}>
              <Comment />
            </TouchableOpacity>

            <TouchableOpacity>
              <Share />
            </TouchableOpacity>
          </View>
          {activeCommentReplyId === reply.id && (
            <Animated.View
              style={[styles.animatedContainer, {opacity: opacityAnim}]}>
              <AddShowComments />
            </Animated.View>
          )}
        </View>
      ))}

      {/* {replies.length > 2 && !showAllReplies && (
        <TouchableOpacity onPress={()=>{navigation.navigate("ViewAllScreen")}}>
          <Text style={styles.viewAllButton}>View All Replies</Text>
        </TouchableOpacity>
      )} */}

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

  viewAllButton: {
    color: Colors.primary100,
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Nunito-Medium',
  },
});

export default ForumQuesAns;
