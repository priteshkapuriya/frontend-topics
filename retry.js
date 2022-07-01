function retry(url, attempts=3){
    function callapi(u,ca){
      if(ca <= attempts){
         setTimeout(()=>{
      fetch(url).then((res)=>{
        if(res.success){
          console.log(res);
        } else {
          callapi(url, ca + 1)
        }
      })
    }, currentAt*1000);
      } else {
        conmsole.log('maximum attempt reached')
      }
     
    }
  callapi(url,1)
    
}
