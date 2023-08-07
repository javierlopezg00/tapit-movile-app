import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log(username);
        console.log(password);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Tapit</Text>
      <TextInput 
      style={styles.textInput} 
      placeholder="Username" 
      value={username}
      onChangeText={setUsername}
      />
      <TextInput 
      style={styles.textInput} 
      placeholder="password" 
      value={password}
      onChangeText={setPassword}
      />
      <Button title="Login" color="#43464f" style={styles.button} onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
  },
  textInput: {
    padding: '4%',
    margin: '2%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  mainText: {
    fontSize: 50,
  },
});
