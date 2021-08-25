import React from 'react';
import {Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home</Text>
  </View>
);

const Perfil = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Perfil</Text>
  </View>
);

const Settings = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Settings</Text>
  </View>
);

const CreateTab = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);

const CreateDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" children={CreateTab} />

    <Drawer.Screen name="Settings" children={CreateTab} />
  </Drawer.Navigator>
);

const CreateAppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen children={CreateDrawer} name="App" />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <CreateAppStack />
    </NavigationContainer>
  );
};

export default App;
