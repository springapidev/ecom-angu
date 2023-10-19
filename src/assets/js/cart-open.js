window.onload = function(){
    var cartpanel = document.getElementById('cartpanel');
    document.onclick = function(e){
     if(e.target.id === 'cart'){      
      document.getElementById("cartpanel").style.width = "320px";

     //alert('Hi.....');
         
       }
       else if(e.target.id !== 'cartpanel'){
          document.getElementById("cartpanel").style.width = "0";
          // alert('Hi...Outside..');
       }
    };
 };