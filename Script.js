let today = new Date();

let hourNow = today.getHours();

let greeting;

greeting = "Good Evening";
if (hourNow >= 18) {
  document.body.className = "evening";
}

else if (hourNow <= 12) {
  greeting = "Good Morning";
  document.body.className = "morning";
}

else {
  greeting = "Welcome";
  document.body.className = "day";
}

document.write('<h3>' + greeting + '</h3>');

function Character(){
  var xhttp = new XMLHttpRequest();//using AJAX to send a request to retrieve data from moves.json
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){  //check the state of moves.json
        let hiragana = JSON.parse(this.responseText)
        for (var i = 0; i < hiragana.length; i++){
          console.log(hiragana[i].SubCategory)
      }
      }
  }
  xhttp.open("GET", "Script_2.json", true);
  xhttp.send();
}

Character()