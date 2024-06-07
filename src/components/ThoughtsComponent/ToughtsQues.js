import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import ThoughtProfile from './ThoughtProfile';
import Thoughts from './Thoughts';
import Comment from '../ForumMain/FavourCommentsShare/Comment';
import Favours from '../ForumMain/FavourCommentsShare/Favours';
import Share from '../ForumMain/FavourCommentsShare/Share';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ToughtsQues = ({Attachment}) => {
  return (
    <View>
      <View>
        <ThoughtProfile />
      </View>

      <View>
        <Thoughts />
      </View>

      <View style={{width: 340, marginTop: 10}}>
        <Text style={styles.thoughtText}>
          Ayurveda, one of the world's oldest holistic healing systems,
          originated in India over 3,000 years ago and is still widely practiced
          today. It is based on the belief that health and wellness depend on a
          delicate balance between the mind, body, and spirit. Unlike
          conventional medicine, Ayurveda emphasizes prevention and the
          personalized treatment of diseases through a combination of diet,
          herbal remedies, exercise, and lifestyle adjustments. One fascinating
          aspect is its concept of "doshas" – Vata, Pitta, and Kapha – which are
          believed to be the primary life forces or energies that govern our
          physiological and psychological activities. Ayurvedic practitioners
          tailor treatments to balance these doshas in each individual,
          promoting harmony and health.
        </Text>
      </View>
      {Attachment == 'Image' ? (
        <View
          style={{
            width: 340,
            height: 352,
            marginTop: 10,
            borderRadius: 12,
            marginTop: 15,
          }}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 12}}
            source={{
              uri: 'https://entermyattic.com/wp-content/uploads/2017/08/ibiza-hotspot-7.jpg',
            }}
          />
        </View>
      ) : (
        <View style={styles.DocContainer}>
          <View style={styles.IconContainer}>
            <Ionicons name="document-text-outline" size={20} color="#3A643B" />
          </View>

          <View style={styles.DocProContainer}>
            <Text style={styles.DocNameText}>Healthy Lifestyle</Text>
            <Text style={styles.DocSizeTypeText}>
              1.2 Mb <Text>pdf</Text>
            </Text>
          </View>
        </View>
      )}

      <View style={styles.Properties}>
        <View style={styles.edibleSign}>
          <Text style={styles.edibleSignText}>General Ayurveda</Text>
        </View>

        <View style={styles.edibleSign}>
          <Text style={styles.edibleSignText}>Basic of Ayurveda</Text>
        </View>
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

        <TouchableOpacity>
          <Comment />
        </TouchableOpacity>

        <TouchableOpacity>
          <Share />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thoughtText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 14,
    color: '#1F1F1F',
  },
  Properties: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 0,
    marginTop: 10,
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

  CommentsShareFavourContainer: {
    gap: 28,
    flexDirection: 'row',
    left: 10,
    padding: 5,
  },

  DocContainer: {
    width: 275,
    height: 63,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    padding: 10,
    flexDirection: 'row',
  },
  IconContainer: {
    height: 43,
    width: 43,
    borderRadius: 5,
    backgroundColor: '#EAF2EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  DocProContainer: {
    marginLeft: 10,
    
  },

  DocNameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
  },

  DocSizeTypeText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 11,
    color: '#8D8D8D',
  },
});

export default ToughtsQues;
