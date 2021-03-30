import React from 'react';
import { Button, View } from 'react-native';

export default function MyComponent() {
  return (
      <View>
            <Button onPress={()=> {
        alert("Button in MyComponent is clicked .....")
      }} title="My Component Button"></Button>
      </View>

  );
}