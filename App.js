import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigations/BottomTabs/BottomTab';
import ViewAllRepliesScreen from './src/screens/ViewAllRepliesScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTab} />

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

export default App;
