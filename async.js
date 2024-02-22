const callback = (error, data) => {
    if(error){
      console.log('calling callback with error', error )
    };
    
    if(data){
      console.log('calling callback with data', data)
    };
  };

  function gettodos (callback) {

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
  if (this.readyState === 4 && request.status === 200) {
          // Typical action to be performed when the document is ready:
     const data = JSON.parse(request.responseText);
     const dataString = JSON.stringify(data);
    //console.log('check res >>>: ',request);
     callback(undefined, data);
     callback(undefined, dataString);
  } 
  
  if(this.readyState === 4  && request.status !== 200){
    callback('Somthing wrongs', undefined);
  }
  // else {
  //   console.log(">>> status: ",request.status);
  //   }
   };
  request.open("GET", "http://jsonplaceholder.typicode.com/todos", true);
  request.send();
  };
  
  gettodos(callback);