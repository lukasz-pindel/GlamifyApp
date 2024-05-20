/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const CircleCarousel = () => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Categories</Text>
    <View style={styles.carousel}>
      <TouchableOpacity style={styles.circleButton}>
        <View style={styles.circle} />
        <Text style={styles.circleLabel}>Category 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton}>
        <View style={styles.circle} />
        <Text style={styles.circleLabel}>Category 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleButton}>
        <View style={styles.circle} />
        <Text style={styles.circleLabel}>Category 3</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const TileCarousel = () => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Recommended Places</Text>
    <View style={styles.carousel}>
      <TouchableOpacity style={styles.tileButton}>
        <View style={styles.tile} />
        <Text style={styles.tileLabel}>Place 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tileButton}>
        <View style={styles.tile} />
        <Text style={styles.tileLabel}>Place 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tileButton}>
        <View style={styles.tile} />
        <Text style={styles.tileLabel}>Place 3</Text>
      </TouchableOpacity>
    </View>
  </View>
);


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Text style={styles.header}>Glamify</Text>
        <TextInput
          placeholder="Search..."
          style={styles.searchBar}
        />
        <CircleCarousel />
        <TileCarousel />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
    margin: 10,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  carousel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  circleButton: {
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  circleLabel: {
    marginTop: 4,
    fontWeight: '500',
  },
  tileButton: {
    alignItems: 'center',
    marginHorizontal: 10, 
  },
  tile: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
  },
  tileLabel: {
    marginTop: 4,
    fontWeight: '500',
  },
});


export default App;
