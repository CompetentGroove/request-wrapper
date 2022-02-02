
 ## makeGetRequest

async function get(url,callback) {
    try {
      const response = await axios.get(url);
      callback(response.status,response.data); 
    } catch (error) {
      console.error(error);
    }
  }
 
 ## makePostRequest
  
 async function post(url,callback) {
    try {
    let response = await axios.post(url)
    callback(response.status,response.data); 
    } catch (error) {
        console.log(error)
    }
}

## makeDeleteRequest
async function Delete(url,callback) {
    try{
    let response = await axios.delete(url);
    callback(response.status,response.data);
        
    } catch (error) {
        console.log(error)
    }
}

## makePutRequest

async function put(url,callback){
    try {
         const response= await axios.put(url);
         callback(response.status,response.data);

    } catch (error) {
        console.log(error);  
    }
}

 ## MakePatchRequest

async function patch(url,callback){
  try {
  const response= await axios.patch(url);
  callback(response.status,response.data);

  } catch (error) {
    console.log(error)
  }
}
