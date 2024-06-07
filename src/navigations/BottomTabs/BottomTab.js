import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Store from '../../screens/BottomTabsScreens/Store';
import Consult from '../../screens/BottomTabsScreens/Consult';
import Routines from '../../screens/BottomTabsScreens/Routines';
import Orders from '../../screens/BottomTabsScreens/Orders';
import ForumHomeScreen from '../../screens/ForumHomeScreen';
import ViewAllRepliesScreen from '../../screens/ViewAllRepliesScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardOptions: {
          behavior: 'height',
        },

        headerShown: false,
        tabBarStyle: {
          
          borderTopLeftRadius: 29,
          borderTopRightRadius: 29,
          backgroundColor: 'white',
          height: 75,
          paddingBottom: 15,
          paddingTop: 10,
          backgroundColor: '#3A643B',
        },
        tabBarLabelStyle: {fontSize: 10.42, fontFamily: 'Nunito-Regular'},
        tabBarActiveTintColor: '#9DB29D',
        tabBarInactiveTintColor: '#9DB29D',
      }}>
      <Tab.Screen
        name="ForumHomeScreen"
        component={ForumHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Home.png')}
            />
          ),
        }}
      />
      {/* <Stack.Screen name="ViewAllScreen" component={ViewAllRepliesScreen} /> */}

      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Store.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarLabel: 'Consult',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Consult.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Routines"
        component={Routines}
        options={{
          tabBarLabel: 'Routines',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Routines.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Orders.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
