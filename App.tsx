import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MyComponent from "./MyComponent"
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={()=> {
        alert("Button is clicked .....")
      }} title="Click Here"></Button>
      <StatusBar style="auto" />

      <MyComponent />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
