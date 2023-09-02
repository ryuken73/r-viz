export const throttle = (callbackFn, limit) => {
  let wait = false;                  
  return function (args) {              
      if (!wait) {                  
          callbackFn.call(this, args);           
          wait = true;               
          setTimeout(function () {   
              wait = false;          
          }, limit);
      }
  }
}