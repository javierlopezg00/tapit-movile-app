
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Login from './src/Views/Login';
import SignUp from './src/Views/SignUp';
import Platforms from './src/Views/Platforms';
import Menu from './src/Components/Menu';
import Profile from './src/Views/Profile';

export default function App() {
  const [currentView, setCurrentView] = useState('Platforms'); // Componente inicial

  const changeView = (viewName) => {
    setCurrentView(viewName);
  };

  let componentToRender;

  if (currentView === 'Platforms') {
    componentToRender = <Platforms />;
  } else if (currentView === 'Login') {
    componentToRender = <Login />;
  } else if (currentView === 'Profile') {
    componentToRender = <Profile />;
  }


  return (
    <View style={styles.container}>
      {componentToRender}
      <Menu changeView={changeView} />
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
