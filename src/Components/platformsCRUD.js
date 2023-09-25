var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const publicIP = "http://54.89.160.101:3300";


export const getUserPlatforms = async (userID) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "user_id": userID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const response = await fetch(publicIP+ "/user/getUserPlatforms", requestOptions);
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.log('fetch error:', error);
  }
};

export const getPlatforms = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      const response = await fetch(publicIP + "/platform/platforms", requestOptions);
      const result = await response.json();
      return result;
      //setPlatforms(result);
    } catch (error) {
      console.log("Hola perro");
      console.log('fetch error:', error);
    }
  };

export const createUserPlatform = async (userID, selectedPlatform, URL) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try {
      var raw = JSON.stringify({
        "user_id": userID,
        "platform_id": selectedPlatform,
        "url": URL
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch(publicIP + "/platform/createUserPlatform", requestOptions);

    } catch (error) {
      console.log("Fetch error: " + error);
    }

  };

export const updateUserPlatform = async (userID, platformID, editedUrl) => {
    try{
      var raw = JSON.stringify({
        'user_id': userID,
        'platform_id': platformID,
        'url_platform': editedUrl,

      });
      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      const response = await fetch(publicIP + "/platform/updateUserPlatform", requestOptions);
      const result = await response.json();
    }catch(error){
      console.log("Fetch error: " + error)
    }
  };

  export const deleteUserPlatform = async (userID, platformID) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try{
      var raw = JSON.stringify({
        "user_id": userID,
        "platform_id": platformID,
      });

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch(publicIP + "/platform/deleteUserPlatform", requestOptions);
      const result = await response.json();
      console.log(result)
    }catch(error){
      console.log("Fetch error: "+ error)
    }
  }

