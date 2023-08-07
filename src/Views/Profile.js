import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.coverImage}
        source={{
          uri: 'https://i.pinimg.com/originals/91/df/16/91df16f472fb8530c06016d9b4b6ea99.png',
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg',
          }}
        />
      </View>
      <Text style={styles.secondText}>Javier Lopez</Text>
      <Text style={styles.text}>Programador</Text>
      <Button
        type="clear"
        icon={<Icon name="edit" size={25} color="blue" />}
        onPress={() => {
          // Acción para editar el perfil
        }}
      />
      <View style={styles.platformImagesContainer}>
        <View style={styles.column}>
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              style={styles.platformImage}
              source={{
                uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png',
              }}
            />
          ))}
        </View>
        <View style={styles.column}>
          {[...Array(3)].map((_, index) => (
            <Image
              key={index + 3}
              style={styles.platformImage}
              source={{
                uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png',
              }}
            />
          ))}
        </View>
        <View style={styles.column}>
          {[...Array(3)].map((_, index) => (
            <Image
              key={index + 6}
              style={styles.platformImage}
              source={{
                uri: 'https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png',
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
  },
  mainText: {
    fontSize: 30,
    marginTop: 50,
    backgroundColor: '#3D3D3D',
    paddingLeft: 110,
    paddingRight: 110,
  },
  secondText: {
    fontSize: 25,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderRadius: 85,
    overflow: 'hidden',
    marginTop: -85,
    borderWidth: 5,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  platformImagesContainer: {
    flexDirection: 'row', // Mostrar las imágenes en filas
    flexWrap: 'wrap', // Permitir que se envuelvan en varias filas
    justifyContent: 'center', // Centrar las imágenes en la fila principal
    marginTop: 15,
  },
  column: {
    flexDirection: 'column', // Mostrar las imágenes en columnas
    alignItems: 'center', // Centrar las imágenes en la columna
  },
  platformImage: {
    width: 60,
    height: 60,
    margin: 15, // Espacio entre las imágenes
  },
  coverImage: {
    marginTop: 10,
    width: '100%',
    height: '30%',
  },
});
