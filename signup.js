 function myfunction(){
         
       var email=document.getElementById("email1").value;
      var  pass=document.getElementById("pass1").value;
      
     // localStorage.setItem('formData',JSON.stringify(formData));
      // console.log(getItem('formData'));
      //console.log(formData.email);
       var email=  localStorage.setItem("email1",email);
       var pass1= localStorage.setItem("pass1",pass);

       document.getElementById("email1").value="";
      document.getElementById("pass1").value="";
      window.location.href="index.html";

     
       }



  function loginData() {
 

  var email = document.getElementById("email").value;

   var pass =  document.getElementById("pass").value;

  var email2=  localStorage.getItem("email1");
   var pass2= localStorage.getItem("pass1");
  // alert("Login successful");
   debugger
   if(email==email2 && pass==pass2)
       {
        window.alert("Login successful!!");
        window.location.href="api.html";
       }
       else{
        alert("error");
       // window.location.href="index.html";
       }


  
 
}

