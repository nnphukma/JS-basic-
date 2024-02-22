const callback = (error, data) => {
    if(error){
      console.log('calling callback with error', error )
    };
    
    if(data){
      console.log('calling callback with data', data)
    };
  };
  
  function gettodos (id, callback) {
  
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
        if (this.readyState === 4 && request.status === 200) {
                // Typical action to be performed when the document is ready:
           const data = JSON.parse(request.responseText);
           const dataString = JSON.stringify(data);
        
        //    callback(undefined, data);
        //    callback(undefined, dataString);
        resolve(data)
        } 
        
        if(this.readyState === 4  && request.status !== 200){
        //   callback('Somthing wrongs', undefined);
        reject('something wrongs ')
        }
        // else {
        //   console.log(">>> status: ",request.status);
        //   }
         };
        request.open("GET", `http://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.withCredentials = true;
        request.send();
    })
  
  };

  // dang bat loi bth
//   const getNewtodo = async(id) =>{
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
 
//     if(response && response.status != 200){
//         throw new Error('something wrong with status code: '+ response.status)
//     // vao reject
//     }
//     let data = await response.json();
//     return data;
//     // vao resolve
//   };

  // dang bat loi kieu try catch(e)
const getNewtodo = async(id) =>{
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
           if(response && response.status != 200){
                throw new Error('something wrong with status code: '+ response.status)
                // vao reject
           }
        let data = await response.json();
    return data;
    }catch(e){
        console.log('check catch error', e.message)
    }
    
    // vao resolve
  };


  getNewtodo('adadfa').then(data => {
    console.log('>> get data: ', data);
})
.catch(err => {
    console.log('>> check error: ', err.message)
})
