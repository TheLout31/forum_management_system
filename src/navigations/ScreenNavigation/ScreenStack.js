import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ViewAllRepliesScreen from '../../screens/ViewAllRepliesScreen';


const Stack = createNativeStackNavigator();
const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ViewAllScreen"
          component={ViewAllRepliesScreen}
          options={{
            contentStyle: {backgroundColor: 'white'},
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default ScreenStack;
