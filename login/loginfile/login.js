var username=document.getElementById("username").value;
var pass=document.getElementById("password").value;
var email=document.getElementById("email").value;
var place=document.getElementById("place").value;
var pass=document.getElementById("password").value;
var login=document.getElementById("Login").value;
// document.getElementById("Login").addEventListener("click", function() {
//   // Redirect to another page
//   window.location.href = "  C:\Users\HP\OneDrive\Desktop\login\loginfile\login.html";
// });

function redirectToIndex() {
  window.location.href = ".file:///C:/Users/HP/OneDrive/Desktop/full%20stack%20project/index.html";
  return false; // Prevent default form submission
}

function func(){
  if(username == 'nehakumari' && pass == '123456'){
    alert("success full!")
    

  }
  else{
    alert("wrong entry ")
  }
}