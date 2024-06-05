import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForumProfile from './ForumProfile';
import ForumQuestion from './ForumQuestion';
import ForumReply from './ForumReply';
import CommentsShareFavour from './CommentsShareFavour';

const ForumQuesAns = () => {
  return (
    <View style={{}}>
      <View>
        <ForumProfile />
      </View>

      <View>
        <ForumQuestion />
      </View>

      <View>
        <ForumReply />
      </View>

      <View>
        <CommentsShareFavour />
      </View>

      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ForumQuesAns;
