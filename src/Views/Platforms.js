import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Icon, Button } from 'react-native-elements';
import { createUserPlatform, getPlatforms,getUserPlatforms } from '../Components/platformsCRUD'

import PlatformBox from '../Components/PlatformBox';

export default function Platforms(props) {
  const [showModal, setShowModal] = useState(false);
  const [URL, setURL] = useState('');
  const [platforms, setPlatforms] = useState(['']);
  const [userPlatforms, setUserPlatforms] = useState([''])
  const [selectedPlatform, setSelectedPlatform] = useState(''); 
  const [uploadPlatforms, setUploadPlatforms] = useState(false);

  useEffect(() => {
    (async () => {
      const platforms = await getPlatforms();
      setPlatforms(platforms);
      setUserPlatforms(await getUserPlatforms(props.userID));
    })();
  }, [uploadPlatforms]);

  const handleAddNew = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setURL('');
    setSelectedPlatform('');
    setShowModal(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userPlatforms.map((platform, index) => (
        <PlatformBox 
          key={index} 
          platformName={platform.platform} 
          URLImage={platform.icon_url} 
          platformID={platform.id_user_platform} 
          userID={props.userID} 
          onDeletePlatform={()=>{setUploadPlatforms(true)}}/>
      ))}
      <Button
        type="clear"
        icon={<Icon name="add" size={45} color="white" />}
        onPress={handleAddNew}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalContainer}>
          <Picker
            selectedValue={selectedPlatform}
            onValueChange={(itemValue, itemIndex) => setSelectedPlatform(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Seleccionar plataforma" value="" />
            {platforms.map((platform, index) => (
              <Picker.Item key={index} label={platform.platform} value={platform.id} />
            ))}
          </Picker>
          <TextInput
            style={styles.textInput}
            placeholder="URL"
            value={URL}
            onChangeText={setURL}
          />
          <View>
            <Button
              type="clear"
              icon={<Icon name="done" size={40} color="white" />}
              onPress={() => {createUserPlatform(props.userID, selectedPlatform, URL)
                              setUploadPlatforms(true)
                              setShowModal(false);}}
            />
            <Button
              type="clear"
              icon={<Icon name="close" size={40} color="red" />}
              onPress={handleCancel}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    paddingTop: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40
  },
  textInput: {
    padding: '4%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  picker: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "gray"
  },
  mainText: {
    fontSize: 30,
  },
});
