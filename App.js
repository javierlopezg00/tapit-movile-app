
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Views/Login';
import SignUp from './src/Views/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp></SignUp>
    </View>
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
