import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ForumHomeScreen from './src/screens/ForumHomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ForumHomeScreen"
            component={ForumHomeScreen}
            options={{
              contentStyle: {backgroundColor: 'white'},
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default App;
