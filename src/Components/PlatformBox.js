import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native'; // Agrega TextInput
import { Icon, Button } from 'react-native-elements';

export default function PlatformBox() {
  const [editing, setEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState('');
  
  const handleDelete = () => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Está seguro de eliminar este item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            console.log('Item eliminado');
            // Aquí puedes agregar la lógica para eliminar el item de verdad
          },
        },
      ],
      { cancelable: false }
    );
  };
  
  const handleEdit = () => {
    if(editing){
      setEditing(false);
    }else{
      setEditing(true);
    }
  };
  
  const handleAccept = () => {
    console.log('Nueva URL:', editedUrl);
    setEditing(false);
  };

  return (
    <View style={[styles.container, editing && styles.editingContainer]}>
      {editing ? (
        <>
        <Image
        style={styles.image}
        source={{
          uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png',
        }}
      />
        <View style={styles.editSection}>
          <TextInput
            style={styles.input}
            placeholder="URL"
            value={editedUrl}
            onChangeText={setEditedUrl}
          />
          <Button
            type="clear"
            icon={<Icon name="edit" size={25} color="blue" />}
            onPress={handleAccept}
          />
          <Button
            type="clear"
            icon={<Icon name="close" size={25} color="red" />}
            onPress={handleEdit}
          />
        </View>
        </>
      ) : (
        <>
        <Image
        style={styles.image}
        source={{
          uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png',
        }}
      />
      <Text style={styles.mainText}>Instagram</Text>
          <Button
            type="clear"
            icon={<Icon name="edit" size={25} color="blue" />}
            onPress={handleEdit}
          />
          <Button
            type="clear"
            icon={<Icon name="delete" size={25} color="red" />}
            onPress={handleDelete}
          />
        </>
      )}
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
    marginTop: 16,
  },
  editingContainer: {
    height: 120, // Aumenta el tamaño cuando se está editando
  },
  mainText: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  editSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginRight: 2,
    marginLeft: 5
  },
});
