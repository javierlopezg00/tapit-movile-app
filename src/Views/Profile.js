import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import {getUserProfile, updateUser, updateUserPhoto} from '../Components/userCRUD'
import { getUserPlatforms } from '../Components/platformsCRUD'
import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: 'AKIAQH3SDLHQ2G33KSMV',
  secretAccessKey: '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',
  region: 'us-east-1' // Por ejemplo, 'us-west-1'
});

export default function Profile(props) {
  const [userPlatforms, setUserPlatforms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [info_box, setInfo_Box] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  
  const [profilePicture, setProfilePicture] = useState('https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png');
  const [coverPicture, setCoverPicture] = useState('https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png');
  
  const uploadImage = async (uri, uploadType) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    const params = {
      Bucket: 'tapitpictures',
      Key: `${uploadType}/p${props.userID}.jpg`,
      Body: blob,
      ContentType: 'image/jpeg', 
      ContentDisposition: 'inline', 
    };
  
    s3.upload(params, function(err, data) {
      if (err) {
        throw err;
      }
      if (uploadType === "ProfilePictures") {
        updateUserPhoto(props.userID, data.Location, 0);
      } else if (uploadType === "CoverPictures") {
        updateUserPhoto(props.userID, data.Location, 1);
      }
    });
  };
  

  const pickImage = async (uploadType) => {

    let aspectImage;
    if(uploadType == "CoverPictures"){
      aspectImage = [4,3]
    }else if(uploadType == "ProfilePictures"){
      aspectImage = [2,2]
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: aspectImage,
      quality: 1,
    });
    uploadImage(result["assets"][0]["uri"], uploadType)
    if (!result.cancelled) {
      setImage(result.uri);
      console.log(image)
    }
  };
  
  const handleCancel = () => {
    setShowModal(false);
  };
  
  useEffect(() => {
  getUserProfile(props.userID);
    (async () => {
      const profile = await getUserProfile(props.userID);
      setFirst_name(profile.first_name)
      setLast_name(profile.last_name)
      setInfo_Box(profile.country)
      setProfilePicture(profile.url_profile_photo)
      setCoverPicture(profile.url_cover_photo)
      setUserPlatforms(await getUserPlatforms(props.userID));
      
    })();
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  
  return (
    <View style={styles.container}>

      <View style={styles.coverImageContainer}>
        <TouchableOpacity onPress={() => pickImage('CoverPictures')}>
            <Image
                style={styles.coverImage}
                source={{
                  uri: coverPicture
                }}
            />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => pickImage('ProfilePictures')}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: profilePicture,
            }}
          />
        </View>
      </TouchableOpacity>
        <Text style={styles.secondText}>{first_name} {last_name}</Text>
        <Text style={styles.text}>{info_box}</Text>
      <Button
        type="clear"
        icon={<Icon name="edit" size={25} color="white" />}
        onPress={() => {
          setShowModal(true);
        }}
      />
      <View style={styles.platformImagesContainer}>
        {userPlatforms.map((platform, index) => (
          <View key={index} style={styles.platformImageContainer}>
            <Image
              style={styles.iconImage}
              source={{
                uri: platform.icon_url,
              }}
            />
          </View>
        ))}
      </View>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="First Name"
                onChangeText={setFirst_name}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Last Name"
                onChangeText={setLast_name}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Info Box"
                onChangeText={setInfo_Box}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={setEmail}
              />
            <Button
              type="clear"
              icon={<Icon name="done" size={40} color="green" />}
              onPress={() => {updateUser(props.userID, first_name, last_name, info_box, username, email)
                              handleCancel()}}
            />
            <Button
              type="clear"
              icon={<Icon name="close" size={40} color="red" />}
              onPress={handleCancel}
            />
        </View>
      </Modal>

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
  coverImageContainer: {
    width: "100%",
    height: "30%",
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconImage: {
    width: 50,
    height: 50, 
    resizeMode: 'contain', 
  },
  platformImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  platformImageContainer: {
    width: '25%', 
    alignItems: 'center',
    marginBottom: 1, 
  },
  coverImage: {
    marginTop: 10,
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40
  },
  textInput: {
    marginTop: 7,
    padding: '4%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
});
