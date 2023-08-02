
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Views/Login';
import SignUp from './src/Views/SignUp';
import Platforms from './src/Views/Platforms';
import Menu from './src/Components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Platforms></Platforms>
      <Menu></Menu>
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
