export const throttle = (callbackFn, limit) => {
  let wait = false;                  
  let timer;
  return function (args) {              
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn.call(this, args);           
      clearTimeout(timer);
    }, limit);
    if (!wait) {                  
        callbackFn.call(this, args);           
        wait = true;               
        clearTimeout(timer);
        setTimeout(function () {   
            wait = false;          
        }, limit);
    }
  }
}