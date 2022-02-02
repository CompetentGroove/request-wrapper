
const axios=require('axios');
async function get(url,callback) {
    try {
      const response = await axios.get(url);
      callback(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  

 async function post(url,callback) {
    try {
    let response = await axios.post(url);
    callback(response);
     
    } catch (error) {
        console.log(error)
    }
}



async function Delete(url) {
    try{
    let res = await axios.delete(url);
    
    console.log( res.data);
        
    } catch (error) {
        console.log(error)
    }
}





async function put(url,callback){
    try {
         const response= await axios.put(url);
         callback(response);
    } catch (error) {
        console.log(error);  
    }
}





async function patch(url,callback){
  try {
  const response= await axios.patch(url);
   callback(response)
  } catch (error) {
    console.log(error)
  }
}






module.exports={get,post,put,Delete,patch};

