import * as React from 'react';
import {Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import TabView, {SceneMap} from 'react-native-bottom-tabs';

const homeIcon = require('./assets/home_24dp_000.png');
const settingsIcon = require('./assets/settings_24dp_000.png');

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

const renderScene = SceneMap({
  home: HomeScreen,
  settings: SettingsScreen,
});

export default function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => BootSplash.hide({fade: true}), 250);
  }, []);

  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: homeIcon,
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: settingsIcon,
    },
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      labeled
    />
  );
}
