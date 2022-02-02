
const axios=require('axios');
async function get(url,callback) {
    try {
      const response = await axios.get(url);
      callback(error,response,body);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // get('https://reqres.in/api/users?page=2', function (error, response, body) {
  //   console.log('statusCode:', response); 
  //   console.log('body:', body); 
  // });

  

 async function post(url,callback) {
    try {
    let response = await axios.post(url);
    callback(response);
     
    } catch (error) {
        console.log(error)
    }
}

// post('https://reqres.in/api/users?page=2', function (error, response, body) {
//     console.log('statusCode:', response); 
//     console.log('body:', body); 
//   });


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
        axios.put(url, callback)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
            })
    } catch (error) {
        console.log(error);  
    }
}

put('https://reqres.in/api/users?page=2',{name:'nitin'})



async function patch(url,callback){
  try {
  const res= await axios.patch(url,callback)
  console.log(res.data)
  console.log(callback)
  } catch (error) {
    console.log(error)
  }
}



module.exports={get,post,put,Delete,patch};

