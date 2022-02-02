
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
    let res = await axios.post(url, callback);
    console.log( res.data);     
    } catch (error) {
        console.log(error)
    }
}

async function Delete(url,callback) {
    try{
    let res = await axios.delete(url);
    callback(res);
    console.log( res.data);
        
    } catch (error) {
        console.log(error)
    }
}

async function put(url,callback){
    try {
        axios.put(url, callback)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
            })
    } catch (error) {
        console.log(error);  
    }
}

async function patch(url,callback){
  try {
  const res= await axios.patch(url,callback)
  .then((res)=>{
    console.log(res);
  })
  } catch (error) {
    console.log(error)
  }
}

module.exports={get,post,put,Delete,patch};

