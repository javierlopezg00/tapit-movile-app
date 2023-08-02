import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default function PlatformBox() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png' }}
      />
      <Text style={styles.mainText}>Instagram</Text>
      <Button
        type="clear"
        icon={<Icon name="edit" size={25} color="blue" />}
        onPress={() => { /* Lógica para editar */ }}
      />
      <Button
        type="clear"
        icon={<Icon name="delete" size={25} color="red" />}
        onPress={() => { /* Lógica para eliminar */ }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginTop: 16
  },
  mainText: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10
  },
  image:{ 
    width: 60, 
    height: 60 }
});
