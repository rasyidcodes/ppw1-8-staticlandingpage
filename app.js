function showAlert() {
    alert("Take action alert box!");
}


function sendData(){

    try {
        var name =  document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        document.getElementById("nameShow").innerText = name;
        document.getElementById("emailShow").innerText = email;
        document.getElementById("messageShow").innerText = message;
        
      }
      catch(err) {
        alert(err.message);
      }


    
}