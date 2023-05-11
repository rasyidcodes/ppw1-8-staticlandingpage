function showAlert() {
    alert("Take action alert box!");
  }
  
  function sendData() {
    try {
      document.getElementById("formsaran").addEventListener("submit", (e) => {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
  
        document.getElementById("nameShow").innerText = name;
        document.getElementById("emailShow").innerText = email;
        document.getElementById("messageShow").innerText = message;

        // var div = document.getElementById("response");
        //     if (div.style.display === "none") {
        //         div.style.display = "block";
        //     } else {
        //         div.style.display = "none";
        //     }

      });
    } catch (err) {
      alert(err.message);
    }
  }