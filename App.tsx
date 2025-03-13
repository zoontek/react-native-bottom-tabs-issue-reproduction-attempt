import {createNativeBottomTabNavigator} from '@bottom-tabs/react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

const tabBarActiveTintColor = '#5d489c';

const homeIcon = require('./assets/home_24dp_000.png');
const settingsIcon = require('./assets/settings_24dp_000.png');

const Tab = createNativeBottomTabNavigator();

const HomeScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Settings Screen</Text>
  </View>
);

export default function App() {
  React.useEffect(() => {
    setTimeout(() => BootSplash.hide({fade: true}), 250);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor,
            tabBarIcon: () => homeIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarActiveTintColor,
            tabBarIcon: () => settingsIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
