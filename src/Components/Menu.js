import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default function Menu({changeView}) {
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        icon={<Icon name="share" size={25} color="white" />}
        titleStyle={styles.buttonTitle}
        onPress={() => changeView('Platforms')}
      />
      <Button
        type="clear"
        icon={<Icon name="person" size={25} color="white" />}
        titleStyle={styles.buttonTitle}
        onPress={() => changeView('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly', // Espacio equitativo entre los botones
    marginTop: 5,
  },
  mainText: {
    fontSize: 30,
    color: 'white',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
  },
});
