
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
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

  const [userPlatforms, setUserPlatforms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "user_id": 17
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        const response = await fetch("http://192.168.0.7:3300/user/getUserPlatforms", requestOptions);
        const result = await response.json();
        
        setUserPlatforms(result);
      } catch (error) {
        console.log('fetch error:', error);
      }
    };

    fetchData();
  }, []);

  let componentToRender;

  if (currentView === 'Platforms') {
    componentToRender = <Platforms userPlatforms = {userPlatforms} userID = {17}/>;
  } else if (currentView === 'Login') {
    componentToRender = <Login />;
  } else if (currentView === 'Profile') {
    componentToRender = <Profile userPlatforms = {userPlatforms} userID = {17}/>;
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
