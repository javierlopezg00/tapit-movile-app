import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import PlatformBox from '../Components/PlatformBox';

export default function Platforms() {


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlatformBox />
      <PlatformBox />
      <PlatformBox />
      <PlatformBox />
      <PlatformBox />
      <PlatformBox />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    paddingTop: 50, // Espacio en la parte superior para separar los elementos del borde
  },
  textInput: {
    padding: '4%',
    margin: '2%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  mainText: {
    fontSize: 30,
  },
});
