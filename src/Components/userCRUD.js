var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getUserProfile = async (userID) => {
    try {
      var raw = JSON.stringify({
        "user_id": userID
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      const response = await fetch("http://192.168.0.7:3300/user/getUserProfile", requestOptions);
      const result = await response.json();
      return result[0]
    } catch (error) {
      console.log('fetch error:', error);
      return null; // Manejo de error, puedes personalizarlo según tus necesidades
    }
  };

 export const updateUser = async (userID, first_name, last_name, info_box, username, email) => {
    try{
      var raw = JSON.stringify({
        "user_id": userID,
        "first_name": first_name,
        "last_name": last_name,
        "infoBox": info_box,
        "username": username,
        "email": email
      });
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      const response = await fetch("http://192.168.0.7:3300/user/updateUser", requestOptions);
      const result = await response.json();
    }catch(e){
      console.log("Fetch Error: " + e)
    }
    
  }

  export const updateUserPhoto = async (userID, newURL, typeUpload) => {
    try{
      var raw = JSON.stringify({
        "user_id": userID,
        "newURL": newURL,
        "typeUpload": typeUpload,
      });
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      const response = await fetch("http://192.168.0.7:3300/user/updateUserPhoto", requestOptions);
      const result = await response.json();
    }catch(e){
      console.log("Fetch Error: " + e)
    }
    
  }