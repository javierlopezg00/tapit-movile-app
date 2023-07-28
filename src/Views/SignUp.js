import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic here using the input values
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Register</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.textInput}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Next" color="#43464f" style={styles.button} onPress={handleSignUp} />
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
  